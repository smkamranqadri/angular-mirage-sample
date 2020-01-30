import { Component } from '@angular/core';

import { PostsService } from './services/posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];

  constructor(private postService: PostsService) {
    this.loadData();
  }

  loadData() {
    this.postService.getPosts().subscribe(data => (this.posts = [...data]));
  }

  addPost() {
    this.postService.addPost().subscribe(() => {
      this.loadData();
    });
  }

  notifyDelete(id) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
