import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rap-cd-album-mixtape-cover-design-template-8e67148b45c3625087dc1cb15f1de8a8_screen.jpg?ts=1629408333',
    name: 'Dreams',
    album: 'Dreams',
    url: 'AAA',
    _id: 'dsfsdf'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
