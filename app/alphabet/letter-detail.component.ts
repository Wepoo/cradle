import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Letter } from './letter';
import { LetterService } from './letter.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-letter-detail',
  templateUrl: 'letter-detail.component.html',
  styleUrls: ['alphabet.component.css']
})
export class LetterDetailComponent implements OnInit {
  constructor(
    private letterService: LetterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.letterService.getLetter(+params['id']))
      .subscribe(letter => this.letter = letter);
  }
  goBack(): void {
    this.location.back();
  }

  imageUrl(path: string){
    return 'http://localhost:3003' + path;
  }

  @Input() letter: Letter;
}
