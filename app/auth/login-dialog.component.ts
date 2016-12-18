import { Component, OnInit } from '@angular/core';
import { MaterialModule, MdDialogRef } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['login-dialog.component.css']
})
export class LoginDialog {
  constructor(public dialogRef: MdDialogRef<LoginDialog>) { }
}
