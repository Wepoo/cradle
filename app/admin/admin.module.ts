import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AlertModule }    from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule }     from '../app-routing.module';

import { AdminPostsComponent }  from './admin-posts.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AdminPostsComponent
  ],
  providers: [],
  bootstrap: [ AdminPostsComponent ]
})
export class AdminModule {
}
