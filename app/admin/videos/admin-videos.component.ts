import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Video } from '../../videos/video';
import { VideoService } from '../../videos/video.service';

const URL = 'http://localhost:3003/videos/image_upload';

@Component({
  moduleId: module.id,
  selector: 'admin-videos',
  templateUrl: 'admin-videos.component.html'
})

export class AdminVideosComponent implements OnInit  {
  videos: Video[];
  selectedItem: Video;
  newItem: Video;

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private router: Router, private videoService: VideoService) {}

  ngOnInit(): void {
    this.getVideos();
    this.newItem = new Video;
  }
  getVideos(): void {
    this.videoService.getVideos().then(videos => this.videos = videos);
  }
  onSelect(video: Video): void {
    this.selectedItem = video;
  }
  add(): void {
    if (!this.newItem) { return; }
    this.videoService.create(this.newItem)
      .then(video => {
        this.videos.push(video);
        this.newItem = new Video;
      });
  }
  save(): void {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('video_id', this.selectedItem.id);
      return {item, form} 
    };
    this.uploader.uploadAll();
    this.videoService.update(this.selectedItem)
      .then(() => this.selectedItem = null);
  }

  delete(video: Video): void {
    this.videoService
        .delete(video.id)
        .then(() => {
          this.videos = this.videos.filter(h => h !== video);
          if (this.selectedItem === video) { this.selectedItem = null; }
        });
  }


}

