export interface IPhoto {
  albumId: number;
  id: number;
  url: string;
  thumbnailUrl: string;
  title: string;
}

export interface PhotoMap {
  [id: string]: IPhoto;
}
