import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import IPost from '../types/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = '/api/posts';

  counter = 1;

  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http.get<Array<IPost>>(this.postsUrl);
  }

  public addPost() {
    this.counter++;
    return this.http.post(this.postsUrl, {
      title: `New Post - ${this.counter}`
    });
  }

  public toggleLike(id: string) {
    return this.http.put(`${this.postsUrl}/${id}`, {});
  }

  public delete(id: string) {
    return this.http.delete(`${this.postsUrl}/${id}`);
  }
}
