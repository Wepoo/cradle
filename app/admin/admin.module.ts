import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AlertModule }    from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

import { AdminRoutingModule }     from './admin-routing.module';

import { AdminNavComponent }        from './admin-nav.component';
import { AdminPostsComponent }      from './posts/admin-posts.component';
import { AdminVideosComponent }     from './videos/admin-videos.component';
import { AdminLettersComponent }     from './letters/admin-letters.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AdminNavComponent,
    AdminPostsComponent,
    AdminVideosComponent,
    AdminLettersComponent
  ],
  providers: [],
  bootstrap: [ AdminPostsComponent ]
})
export class AdminModule {
}
