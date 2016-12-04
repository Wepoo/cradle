import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../posts/post';
import { PostService } from '../../posts/post.service';

@Component({
  moduleId: module.id,
  selector: 'admin-posts',
  templateUrl: 'admin-posts.component.html'
})

export class AdminPostsComponent implements OnInit  {
  posts: Post[];
  selectedPost: Post;
  newPost: Post;

  constructor(private router: Router, private postService: PostService) {}


  ngOnInit(): void {
    this.getPosts();
    this.newPost = new Post;
  }
  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
  onSelect(post: Post): void {
    this.selectedPost = post;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPost.id]);
  }
  add(): void {
    if (!this.newPost) { return; }
    this.postService.create(this.newPost)
      .then(post => {
        this.posts.push(post);
        this.newPost = new Post;
      });
  }
  save(): void {
    this.postService.update(this.selectedPost)
      .then(() => this.selectedPost = null);
  }

  delete(post: Post): void {
    this.postService
        .delete(post.id)
        .then(() => {
          this.posts = this.posts.filter(h => h !== post);
          if (this.selectedPost === post) { this.selectedPost = null; }
        });
  }


}

