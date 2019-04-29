import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';

const routes = [
  {
    path: '/albums',
    component: AlbumsComponent
  },
  {
    path: '/images/{id}',
    component: AlbumsComponent
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ImageRoutingModule { }