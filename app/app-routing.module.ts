import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DashboardComponent }     from './dashboard.component';
import { PostsComponent }         from './posts/posts.component';
import { VideosComponent }        from './videos/videos.component';
import { VideoDetailComponent }   from './videos/video-detail.component';
import { PostDetailComponent }    from './posts/post-detail.component';
import { AlphabetComponent }      from './alphabet/alphabet.component';
import { LetterDetailComponent }  from './alphabet/letter-detail.component';
import { DrawComponent }          from './drawing_panel/draw.component';
import { GamesComponent }         from './games/games.component';
import { TestsComponent }         from './tests/tests.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts',     component: PostsComponent },
  { path: 'videos',     component: VideosComponent },
  { path: 'videos/:id',     component: VideoDetailComponent },
  { path: 'alphabet',     component: AlphabetComponent },
  { path: 'letters/:id',     component: LetterDetailComponent },
  { path: 'drawing',     component: DrawComponent },
  { path: 'games',     component: GamesComponent },
  { path: 'tests',     component: TestsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
