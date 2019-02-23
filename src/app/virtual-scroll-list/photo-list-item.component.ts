import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPhoto } from '../services/photos-service';

@Component({
  selector: 'app-photo-list-item',
  template: `
    <div class="item">
      <div class="item-detail">Id: {{ photo.id }} | Album Id: {{ photo.albumId }}</div>
      <div class="item-title" title="{{ photo.title }}">Title: {{ photo.title }}</div>
      <div class="item-detail">Url: {{ photo.url }}</div>
      <div class="item-thumbnailUrl">
        <span>Thumbnail:</span>
        <img src="{{ photo.thumbnailUrl }}" alt="{{ photo.thumbnailUrl }}" />
      </div>
    </div>
  `,
  styles: [
    `
      .item {
        width: calc(100% - 1rem);
        border-radius: 3px;
        border: 3px dashed #9a9a9a;
        padding: 10px;
        margin-bottom: 5px;
      }

      .item-detail {
        min-height: 20px;
      }

      .item-title {
        height: auto;
      }

      .item-thumbnailUrl {
        height: 60px;

        display: flex;
      }

      img {
        width: 60px;
        height: 60px;
      }

      .item-thumbnailUrl > span {
        margin-right: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoItemComponent {
  @Input()
  photo: IPhoto;
}
