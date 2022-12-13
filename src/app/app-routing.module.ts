import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { ListVideosComponent } from './components/list-videos/list-videos.component';

const routes: Routes = [
  { path: 'addV', component: AddVideoComponent },
  { path: 'listV', component: ListVideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
