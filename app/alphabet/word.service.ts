import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Word } from './word';

@Injectable()
export class WordService {
   private wordsUrl = 'http://localhost:3003/words';

  constructor(private http: Http) { }

  getWords(): Promise<Word[]> {
    return this.http.get(this.wordsUrl)
               .toPromise()
               .then(response => response.json() as Word[])
               .catch(this.handleError);
  }

  getWord(id: number): Promise<Word> {
    return this.http.get(this.wordsUrl + '/' + id)
               .toPromise()
               .then(response => response.json() as Word)
               .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  create(word: Word): Promise<Word> {
    const url = `${this.wordsUrl}`;
    return this.http
      .post(url, JSON.stringify({'word': word}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(word: Word): Promise<Word> {
    const url = `${this.wordsUrl}/${word.id}`;
    return this.http
      .put(url, {'word': word}, {headers: this.headers})
      .toPromise()
      .then(() => word)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.wordsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
