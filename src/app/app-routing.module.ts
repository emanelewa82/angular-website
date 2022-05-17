import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {DetailsComponent} from "./details/details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ArticlesComponent} from "./articles/articles.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "articles", component:ArticlesComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: "contact", component:ContactComponent},
  {path :"login", component: LoginComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
