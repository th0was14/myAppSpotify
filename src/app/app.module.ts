import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistServiceService } from './artist.service/artist.service';
import { SpotifyAuthService } from './spotify-auth/spotify-auth.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [ArtistServiceService, SpotifyAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
