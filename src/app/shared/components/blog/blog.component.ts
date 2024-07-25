import { Component } from '@angular/core';
import { PostService } from '../../../features/post/services/post.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(private postService: PostService) {}

  getAllPosts() {
    this.postService.getAll().subscribe(posts => {
      // Handle the retrieved posts here
    });
  }
}