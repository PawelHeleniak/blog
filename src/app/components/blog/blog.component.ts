import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Fake data
import {POSTS} from 'src/app/service/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.post = POSTS[this.id-1]
  }

  id: number = 0;

  //---Data---
  post:Post = {
    title: '',
    date: '',
    description: '',
    img: '',
    imgAlt: '',
    ID: 0
  }
}
interface Post{
  title: string;
  date: string;
  description: string;
  img: string;
  imgAlt: string;
  ID: number;
}