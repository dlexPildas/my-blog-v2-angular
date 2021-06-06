import { PageInfoYoutubeModel } from "./page-info-youtube.model";
import { PlaylistItemYoutubeModel } from "./playlist-item-youtube.model";

export interface PageResponseYoutubeModel {
  kind: string;
  etag: string;
  pageinfo: PageInfoYoutubeModel;
  items: PlaylistItemYoutubeModel[];
}
