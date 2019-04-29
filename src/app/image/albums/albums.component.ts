import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: string[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getAllAlbums();
  }

  getAllAlbums() {
    this.imageService.getAllAlbums().subscribe(res => {
      this.albums = res;
      console.log(res);
    });
  }

}
