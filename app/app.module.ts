import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AlertModule }    from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';

import { AdminModule }         from './admin/admin.module';

import { AppComponent }        from './app.component';
import { NavComponent }        from './nav.component';
import { PostDetailComponent }  from './posts/post-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { PostsComponent }     from './posts/posts.component';
import { PostService }         from './posts/post.service';
import { VideoDetailComponent }  from './videos/video-detail.component';
import { VideosComponent }     from './videos/videos.component';
import { VideoService }         from './videos/video.service';
import { AlphabetComponent }     from './alphabet/alphabet.component';
import { LetterDetailComponent } from './alphabet/letter-detail.component';
import { LetterService }         from './alphabet/letter.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AlertModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    PostDetailComponent,
    PostsComponent,
    VideoDetailComponent,
    VideosComponent,
    AlphabetComponent,
    LetterDetailComponent
  ],
  providers: [
    PostService,
    VideoService,
    LetterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
