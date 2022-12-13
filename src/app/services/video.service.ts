import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Video } from '../model/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/';

  fetchVideos() {
    return this.http.get(this.url + 'videos');
  }
  fetchAccounts(): Observable<Video[]> {
    return this.http.get<Video[]>(this.url + 'videos');
  }

  addVideo(d: any) {
    return this.http.post('http://localhost:3000/videos', d);
  }
  updateVideo(id: any, data: any) {
    return this.http.put('http://localhost:3000/videos/' + id, data);
  }
  findById(id: any) {
    return this.http.get('http://localhost:3000/videos/' + id);
  }
  removeVideo(id: any) {
    return this.http.delete('http://localhost:3000/videos/' + id);
  }
}
