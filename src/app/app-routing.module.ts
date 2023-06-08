import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewsComponent} from './news/news.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: "nowosci", component: NewsComponent},
  {path: "galeria", component: GalleryComponent},
  {path: "kontakt", component: ContactComponent},
  {path: '',   redirectTo: '/nowosci', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
