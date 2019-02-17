import { ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { IPhoto, PhotosService } from '../services/photos-service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll-list',
  template: `
    <ng-container *ngIf="(photos$ | async) as photos">
      <cdk-virtual-scroll-viewport #viewport class="viewport" [itemSize]="250" (scrolledIndexChange)="checkScrollEnd($event)">
        <div *cdkVirtualFor="let photo of photos; trackBy: index">
          <app-virtual-scroll-list-item [photo]="photo"></app-virtual-scroll-list-item>
        </div>
      </cdk-virtual-scroll-viewport>
    </ng-container>
  `,
  styles: [
    `
      .viewport {
        width: 100%;
        height: 100%;
        color: black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollListComponent implements OnInit {
  photos$: Observable<IPhoto[]>;
  pageOffset = 0;
  nextPage$ = new BehaviorSubject<boolean>(true);

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  constructor(private service: PhotosService) {}

  ngOnInit() {
    this.photos$ = this.nextPage$.asObservable().pipe(
      concatMap(() => this.service.getBatch$(this.pageOffset, 8)),
      tap(() => {
        if (this.viewport) {
          // console.log('scroll to index', this.pageOffset * 8);
          // this.viewport.scrollToIndex(this.pageOffset * 8);
          this.pageOffset = this.pageOffset + 1;
        }
      }),
    );
  }

  checkScrollEnd(e) {
    const numItems = this.viewport.getDataLength();
    const end = this.viewport.getRenderedRange().end;
    console.log('a', numItems);
    console.log('b', end);

    if (end === numItems) {
      this.nextPage$.next(true);
    }
  }
}
