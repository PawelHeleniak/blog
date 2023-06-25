import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Fake data
import {POSTS} from 'src/app/service/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.itemsData = POSTS;
    this.pagination = this.items.length%4;

    this.handleSort(1)
  }
  options = {
    maxDisplay: 4,
  }

  pagination = 0;
  activePagination = 1;
  paginationArray: any = {};

  handleSort(item:any){
    this.pagination = Math.ceil(this.itemsData.length/this.options.maxDisplay)
    for (let i: number = 1; i < this.pagination+1; i++) {
      this.paginationArray['item' + i] = i;
    }
    this.activePagination = item;

    this.items = [];
    for (let i:number = (this.activePagination-1)*this.options.maxDisplay; i < this.activePagination*this.options.maxDisplay; i++) {
      if(this.itemsData.length > i)
        this.items.push(this.itemsData[i]);
    }
  }
  handlePage(id:number){
    this.router.navigate(["/", `blog`], { queryParams: { id: id } });
  }
  itemsData: Array<Post> = []
  items: Array<Post> = []
}
interface Post{
  title: string;
  date: string;
  description: string;
  img: string;
  imgAlt: string;
  ID: number;
}