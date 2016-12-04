import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPostsComponent }      from './posts/admin-posts.component';
import { AdminVideosComponent }      from './videos/admin-videos.component';


const routes: Routes = [
  { path: 'admin/posts',     component: AdminPostsComponent },
  { path: 'admin/videos',    component: AdminVideosComponent },
  { path: 'admin/letters',   component: AdminPostsComponent },
  { path: 'admin/words',     component: AdminPostsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
