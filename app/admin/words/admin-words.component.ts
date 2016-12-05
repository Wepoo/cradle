import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Word } from '../../alphabet/word';
import { Letter } from '../../alphabet/letter';
import { WordService } from '../../alphabet/word.service';
import { LetterService } from '../../alphabet/letter.service';

const URL = 'http://localhost:3003/words/image_upload';

@Component({
  moduleId: module.id,
  selector: 'admin-words',
  templateUrl: 'admin-words.component.html'
})

export class AdminWordsComponent implements OnInit  {
  letters: Letter[];
  words: Word[];
  selectedItem: Word;
  newItem: Word;

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private router: Router, private wordService: WordService, private letterService: LetterService) {}


  ngOnInit(): void {
    this.getWords();
    this.getLetters();
    this.newItem = new Word;
  }
  getWords(): void {
    this.wordService.getWords().then(words => this.words = words);
  }
  getLetters(): void {
    this.letterService.getLetters().then(letters => this.letters = letters);
  }
  getLetter(letter_id: number): void {
    this.letters.find(l => l.id === letter_id).name;
  }
  onSelect(word: Word): void {
    this.selectedItem = word;
  }
  add(): void {
    if (!this.newItem) { return; }
    this.wordService.create(this.newItem)
      .then(word => {
        this.words.push(word);
        this.newItem = new Word;
      });
  }
  save(): void {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('word_id', this.selectedItem.id);
      return {item, form} 
    };
    this.uploader.uploadAll();
    this.wordService.update(this.selectedItem)
      .then(() => this.selectedItem = null);
  }

  delete(word: Word): void {
    this.wordService
        .delete(word.id)
        .then(() => {
          this.words = this.words.filter(h => h !== word);
          if (this.selectedItem === word) { this.selectedItem = null; }
        });
  }


}

