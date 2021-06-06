import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageResponseYoutubeModel } from '@course/models/page-response-youtube.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl: string = 'https://www.googleapis.com/youtube/v3';
  apiKey: string = 'AIzaSyAsoBfor_c6tdPXgxH2ETD6-MmcuwqQxfE';

  constructor(
    private http: HttpClient
  ) { }

  getPlaylist(playlistsId: string): Observable<PageResponseYoutubeModel> {
    return this.http.get<PageResponseYoutubeModel>(`${this.baseUrl}/playlists`, {
      params: {
        key: this.apiKey,
        part: 'snippet',
        id: playlistsId
      }
    });
  }
}
