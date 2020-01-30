import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import IPost from '../../types/post.type';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  @Output()
  notifyDelete = new EventEmitter<string>();

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  toggleLike() {
    this.postsService.toggleLike(this.post.id).subscribe(() => {
      this.post.like = !this.post.like;
    });
  }

  delete() {
    this.postsService.delete(this.post.id).subscribe(() => {
      this.notifyDelete.emit(this.post.id);
    });
  }
}
