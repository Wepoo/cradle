import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  moduleId: module.id,
  selector: 'my-videos',
  templateUrl: 'videos.component.html'//,
  //styleUrls: [ 'videos.component.css' ]
})

export class VideosComponent implements OnInit  {
  videos: Video[];

  constructor(private router: Router, private videoService: VideoService) {}


  ngOnInit(): void {
    this.getVideos();
  }
  getVideos(): void {
    this.videoService.getVideos().then(videos => this.videos = videos);
  }

}

