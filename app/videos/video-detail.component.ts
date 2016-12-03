import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BrowserModule }            from '@angular/platform-browser'
import { DomSanitizer }             from "@angular/platform-browser";

import { Video } from './video';
import { VideoService } from './video.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-video-detail',
  templateUrl: 'video-detail.component.html'/*,
  styleUrls: ['video-detail.component.css']*/
})
export class VideoDetailComponent implements OnInit {
  videoUrl;
  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private location: Location,
    private domSanitizer : DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(video => {
        this.video = video;
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
      });
  }
  goBack(): void {
    this.location.back();
  }

  @Input() video: Video;
}
