import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPostsComponent }      from './posts/admin-posts.component';
import { AdminVideosComponent }      from './videos/admin-videos.component';
import { AdminLettersComponent }     from './letters/admin-letters.component';
import { AdminWordsComponent }     from './words/admin-words.component';


const routes: Routes = [
  { path: 'admin/posts',     component: AdminPostsComponent },
  { path: 'admin/videos',    component: AdminVideosComponent },
  { path: 'admin/letters',   component: AdminLettersComponent },
  { path: 'admin/words',     component: AdminWordsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
