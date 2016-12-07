import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
  moduleId: module.id,
  selector: 'my-posts',
  templateUrl: 'posts.component.html',
  styleUrls: [ 'posts.component.css' ]
})

export class PostsComponent implements OnInit  {
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

}

