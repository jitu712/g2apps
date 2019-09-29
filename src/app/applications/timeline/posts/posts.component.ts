import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private timelineService: TimelineService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.timelineService.getPosts()
      .subscribe(arg => this.posts = arg);
  }

}
