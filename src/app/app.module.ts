import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { FormsModule } from '@angular/forms';
import { ErrorsComponent } from './components/errors/errors.component';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddVideoComponent,
    ErrorsComponent,
    ListVideosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
