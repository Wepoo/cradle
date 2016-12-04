import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Video } from './video';

@Injectable()
export class VideoService {
   private videosUrl = 'http://localhost:3003/videos';

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

  create(video: Video): Promise<Video> {
    const url = `${this.videosUrl}`;
    return this.http
      .post(url, JSON.stringify({'video': video}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(video: Video): Promise<Video> {
    const url = `${this.videosUrl}/${video.id}`;
    return this.http
      .put(url, {'video': video}, {headers: this.headers})
      .toPromise()
      .then(() => video)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.videosUrl}/${id}`;
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
