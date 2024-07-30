import { Component } from '@angular/core';
import { PostService } from '../../../features/post/services/post.service';
import { Post } from '../../../features/post/models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  Posts: Post[] = [];
  constructor(private postService: PostService) {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll().subscribe(posts => {
      this.Posts = posts;
    });
  }
}