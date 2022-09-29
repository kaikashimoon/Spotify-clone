import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import * as dataRaw from './../../../data/track.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  optionsSort:{property:string | null, order:string} = {property:null, order:'asc'}
  @Input() tracks: Array<TrackModel> = []
  constructor() { }

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    console.log(data)
    this.tracks = data
  }

  changeSort(property:string):void {
    const {order} = this.optionsSort
    this.optionsSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
