import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
})
export class AddVideoComponent implements OnInit {
  constructor(private service: VideoService) {}

  ngOnInit(): void {}

  addP(f: any) {
    this.service.addVideo(f).subscribe(() => {
      console.log('ADDED !');
    });
  }
}
