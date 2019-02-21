import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPhoto } from '../services/photos-service';

@Component({
  selector: 'app-virtual-scroll-list-item',
  template: `
    <div class="item">
      <div class="item-detail">Album Id: {{ photo.albumId }}</div>
      <div class="item-detail">Id: {{ photo.id }}</div>
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
        height: 20px;
      }

      .item-title {
        height: 40px;
      }

      .item-thumbnailUrl {
        height: 100px;

        display: flex;
      }

      img {
        width: 100px;
        height: 100px;
      }

      .item-thumbnailUrl > span {
        margin-right: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollListItemComponent {
  @Input()
  photo: IPhoto;
}
