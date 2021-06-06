import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { SnippetYoutubeModel } from '@course/models/snippet-youtube-model';
import { PlaylistItemYoutubeModel } from '@course/models/playlist-item-youtube.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  playlists: PlaylistItemYoutubeModel[] = [];
  plalistIds: string = 'PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G, PL8iIphQOyG-DSLV6qWs8wh37o0R_F9Q_Q, PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3, PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G,PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G'

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.getPlaylistsYoutube();
  }

  getPlaylistsYoutube(): void {
    this.courseService.getPlaylist(this.plalistIds)
      .subscribe(pageResponseYoutube => this.playlists = pageResponseYoutube.items)
  }
}
