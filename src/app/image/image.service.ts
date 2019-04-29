import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../shared/modals/album.modal';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }

  getAllAlbums(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'albums');
  }
}
