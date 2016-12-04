import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../../videos/video';
import { VideoService } from '../../videos/video.service';

@Component({
  moduleId: module.id,
  selector: 'admin-videos',
  templateUrl: 'admin-videos.component.html'
})

export class AdminVideosComponent implements OnInit  {
  videos: Video[];
  selectedItem: Video;
  newItem: Video;

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
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedItem.id]);
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

