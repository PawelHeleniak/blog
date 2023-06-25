import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewsComponent} from './components/news/news.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';


const routes: Routes = [
  {path: '',   redirectTo: '/nowosci', pathMatch: 'full'},
  {path: "nowosci", component: NewsComponent},
  {path: "galeria", component: GalleryComponent},
  {path: "kontakt", component: ContactComponent},
  {path: "blog", component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
