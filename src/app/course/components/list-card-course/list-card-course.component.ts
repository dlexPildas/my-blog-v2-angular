import { PlaylistItemYoutubeModel } from './../../models/playlist-item-youtube.model';
import { Component, Input, OnInit } from '@angular/core';
import { SnippetYoutubeModel } from '@course/models/snippet-youtube-model';

@Component({
  selector: 'app-list-card-course',
  templateUrl: './list-card-course.component.html',
  styleUrls: ['./list-card-course.component.css']
})
export class ListCardCourseComponent implements OnInit {
  @Input() playlists: PlaylistItemYoutubeModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
