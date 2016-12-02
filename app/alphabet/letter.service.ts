import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Letter } from './letter';

@Injectable()
export class LetterService {
   private lettersUrl = 'http://localhost:3003/letters';  // URL to web api

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


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
