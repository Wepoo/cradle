import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Video } from './video';

@Injectable()
export class VideoService {
   private videosUrl = 'http://localhost:3003/videos';  // URL to web api

  constructor(private http: Http) { }

  getVideos(): Promise<Video[]> {
    return this.http.get(this.videosUrl)
               .toPromise()
               .then(response => response.json() as Video[])
               .catch(this.handleError);
  }

  getVideo(id: number): Promise<Video> {
    return this.http.get(this.videosUrl + '/' + id)
               .toPromise()
               .then(response => response.json() as Video)
               .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
