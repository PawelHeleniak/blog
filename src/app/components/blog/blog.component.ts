import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const {firstName, message} = this.profileForm.value;

    if(firstName && message){
      this.validate = false

      const newComment: Comments = {name: firstName, comment: message}
      this.comments.push(newComment);

      //clear input
      this.profileForm.reset();
    }else{
      this.validate = true
    } 
  }
  validate:boolean = false;

  
  comments: Array<Comments> = []
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
interface Comments{
  name: string,
  comment: string,
}