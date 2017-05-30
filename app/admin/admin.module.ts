import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';

import { AlertModule }    from 'ng2-bootstrap/ng2-bootstrap';
import { CustomMaterialModule } from '../commons/custom-material.module';

import { AdminRoutingModule }     from './admin-routing.module';

import { AdminNavComponent }        from './admin-nav.component';
import { AdminPostsComponent }      from './posts/admin-posts.component';
import { AdminVideosComponent }     from './videos/admin-videos.component';
import { AdminLettersComponent }     from './letters/admin-letters.component';
import { AdminWordsComponent }     from './words/admin-words.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    CustomMaterialModule
  ],
  declarations: [
    FileSelectDirective,
    AdminNavComponent,
    AdminPostsComponent,
    AdminVideosComponent,
    AdminLettersComponent,
    AdminWordsComponent
  ],
  providers: [],
  bootstrap: [ AdminPostsComponent ]
})
export class AdminModule {
}
