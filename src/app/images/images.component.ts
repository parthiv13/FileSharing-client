import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: string[];
  albums: string[];
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getAllImages().subscribe((res) => {
      this.images = [];
      res.forEach(el => {
        this.images.push(('http://localhost:8080' + el.substring(50)));
      })
    })

    this.getAllAlbums();
  }

  getAllAlbums() {
    this.imageService.getAllAlbums().subscribe(res => {
      this.albums = [];
      res.forEach(el => {
        let album = el.slice(0, -1);
        console.log(album);
        this.albums.push(album);
      })
    })
  }

}
