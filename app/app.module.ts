import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }        from './app.component';
import { PostDetailComponent }  from './posts/post-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { PostsComponent }     from './posts/posts.component';
import { PostService }         from './posts/post.service';
import { VideoDetailComponent }  from './videos/video-detail.component';
import { VideosComponent }     from './videos/videos.component';
import { VideoService }         from './videos/video.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PostDetailComponent,
    PostsComponent,
    VideoDetailComponent,
    VideosComponent
  ],
  providers: [
    PostService,
    VideoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
