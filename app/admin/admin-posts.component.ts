import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../posts/post';
import { PostService } from '../posts/post.service';

@Component({
  moduleId: module.id,
  selector: 'admin-posts',
  templateUrl: 'admin-posts.component.html'
})

export class AdminPostsComponent implements OnInit  {
  posts: Post[];
  selectedPost: Post;

  constructor(private router: Router, private postService: PostService) {}


  ngOnInit(): void {
    this.getPosts();
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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.postService.create(name)
      .then(post => {
        this.posts.push(post);
        this.selectedPost = null;
      });
  }
  save(): void {
    this.postService.update(this.selectedPost)
      .then(() => {});
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

