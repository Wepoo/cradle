import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Letter } from './letter';

@Injectable()
export class LetterService {
   private lettersUrl = 'http://localhost:3003/letters';

  constructor(private http: Http) { }

  getLetters(): Promise<Letter[]> {
    return this.http.get(this.lettersUrl)
               .toPromise()
               .then(response => response.json() as Letter[])
               .catch(this.handleError);
  }

  getLetter(id: number): Promise<Letter> {
    return this.http.get(this.lettersUrl + '/' + id)
               .toPromise()
               .then(response => response.json() as Letter)
               .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  create(letter: Letter): Promise<Letter> {
    const url = `${this.lettersUrl}`;
    return this.http
      .post(url, JSON.stringify({'letter': letter}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(letter: Letter): Promise<Letter> {
    const url = `${this.lettersUrl}/${letter.id}`;
    return this.http
      .put(url, {'letter': letter}, {headers: this.headers})
      .toPromise()
      .then(() => letter)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.lettersUrl}/${id}`;
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
