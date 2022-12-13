import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/model/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css'],
})
export class ListVideosComponent implements OnInit {
  listVideo!: Video[];
  constructor(private http: HttpClient, private service: VideoService) {}

  ngOnInit(): void {
    this.service.fetchAccounts().subscribe((d:any) => {
      this.listVideo = d;
    });
  }
}
