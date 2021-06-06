import { LocalizedYoutubeModel } from "./localized-youtube.model";
import { ThumbnailsYoutubeModel } from "./thumbnails-youtube.mode"

export interface SnippetYoutubeModel {
  publishedAt: Date,
  channelId: string,
  title: string,
  description: string;
  thumbnails: ThumbnailsYoutubeModel;
  channelTitle: string;
  localized: LocalizedYoutubeModel;
}
