import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

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
  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(video => this.video = video);
  }
  goBack(): void {
    this.location.back();
  }

  @Input() video: Video;
}
