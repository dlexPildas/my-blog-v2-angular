import { SnippetYoutubeModel } from "./snippet-youtube-model";

export interface PlaylistItemYoutubeModel {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetYoutubeModel;
}
