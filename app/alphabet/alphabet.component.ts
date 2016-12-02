import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Letter } from './letter';
import { LetterService } from './letter.service';

@Component({
  moduleId: module.id,
  selector: 'my-alphabet',
  templateUrl: 'alphabet.component.html'
})

export class AlphabetComponent implements OnInit  {
  letters: Letter[];

  constructor(private router: Router, private letterService: LetterService) {}


  ngOnInit(): void {
    this.getLetters();
  }
  getLetters(): void {
    this.letterService.getLetters().then(letters => this.letters = letters);
  }

}

