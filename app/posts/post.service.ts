import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {
   private postsUrl = 'http://localhost:3003';  // URL to web api

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl + '/posts')
               .toPromise()
               .then(response => response.json() as Post[])
               .catch(this.handleError);
  }

  getPost(id: number): Promise<Post> {
    return this.http.get(this.postsUrl + '/posts/' + id)
               .toPromise()
               .then(response => response.json() as Post)
               .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  create(post: Post): Promise<Post> {
    const url = `${this.postsUrl}/posts/`;
    return this.http
      .post(url, JSON.stringify({'post': post}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(post: Post): Promise<Post> {
    const url = `${this.postsUrl}/posts/${post.id}`;
    return this.http
      .put(url, {'post': post}, {headers: this.headers})
      .toPromise()
      .then(() => post)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.postsUrl}/posts/${id}`;
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
