import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Letter } from '../../alphabet/letter';
import { LetterService } from '../../alphabet/letter.service';

@Component({
  moduleId: module.id,
  selector: 'admin-letters',
  templateUrl: 'admin-letters.component.html'
})

export class AdminLettersComponent implements OnInit  {
  letters: Letter[];
  selectedItem: Letter;
  newItem: Letter;

  constructor(private router: Router, private letterService: LetterService) {}


  ngOnInit(): void {
    this.getLetters();
    this.newItem = new Letter;
  }
  getLetters(): void {
    this.letterService.getLetters().then(letters => this.letters = letters);
  }
  onSelect(letter: Letter): void {
    this.selectedItem = letter;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedItem.id]);
  }
  add(): void {
    if (!this.newItem) { return; }
    this.letterService.create(this.newItem)
      .then(letter => {
        this.letters.push(letter);
        this.newItem = new Letter;
      });
  }
  save(): void {
    this.letterService.update(this.selectedItem)
      .then(() => this.selectedItem = null);
  }

  delete(letter: Letter): void {
    this.letterService
        .delete(letter.id)
        .then(() => {
          this.letters = this.letters.filter(h => h !== letter);
          if (this.selectedItem === letter) { this.selectedItem = null; }
        });
  }


}

