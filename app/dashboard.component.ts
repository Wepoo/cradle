import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MaterialModule, MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { Post } from './posts/post';
import { PostService } from './posts/post.service';
import { LoginDialog } from './auth/login-dialog.component';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];
  dialogRef: MdDialogRef<LoginDialog>;

  constructor(public dialog: MdDialog,
      public viewContainerRef: ViewContainerRef, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .then(posts => this.posts = posts.slice(0, 5));
  }

  openDialog() {

    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(LoginDialog, config);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

}

