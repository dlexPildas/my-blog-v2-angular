import { Component, Input, OnInit } from '@angular/core';
import { PlaylistItemYoutubeModel } from '@course/models/playlist-item-youtube.model';
import { SnippetYoutubeModel } from '@course/models/snippet-youtube-model';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {
  @Input() playlist: PlaylistItemYoutubeModel = {} as PlaylistItemYoutubeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
