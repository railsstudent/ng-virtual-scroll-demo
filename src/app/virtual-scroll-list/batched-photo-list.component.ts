import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { concatMap, map, scan, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { IPhoto, PhotoMap, PhotosService } from '../services/photos-service';

@Component({
  selector: 'app-batched-photo-list',
  template: `
    <app-title>Batched Virtual Scroll List</app-title>
    <ng-container *ngIf="(photos$ | async) as photos">
      <cdk-virtual-scroll-viewport #viewport class="viewport" [itemSize]="160" (scrolledIndexChange)="checkScrollEnd($event)">
        <div *cdkVirtualFor="let photo of photos; let i = index; trackBy: trackByIdx">
          <app-photo-list-item [photo]="photo"></app-photo-list-item>
        </div>
      </cdk-virtual-scroll-viewport>
    </ng-container>
  `,
  styles: [
    `
      :host {
        color: black;
      }

      h1 {
        padding: 0.5rem;
      }

      .viewport {
        width: 100%;
        height: 100%;
        margin-left: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BatchedScrollPhotoListComponent implements OnInit, OnDestroy {
  photos$: Observable<IPhoto[]>;
  pageOffset = 1;
  nextPage$ = new BehaviorSubject<boolean>(true);

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  destroy$ = new Subject();

  constructor(private service: PhotosService) {}

  ngOnInit() {
    const batchMap$ = this.nextPage$.asObservable().pipe(
      throttleTime(500),
      concatMap(() => this.getBatch$()),
      scan((acc: PhotoMap, results: PhotoMap) => ({ ...acc, ...results }), {} as PhotoMap),
      tap(() => (this.pageOffset = this.pageOffset + 1)),
    );

    this.photos$ = batchMap$.pipe(
      map((v: PhotoMap) => {
        return Object.keys(v).reduce(
          (acc, k) => {
            acc = acc.concat(v[k]);
            return acc;
          },
          [] as IPhoto[],
        );
      }),
      takeUntil(this.destroy$),
    );
  }

  getBatch$() {
    return this.service.getBatch$(this.pageOffset, 10).pipe(
      map((results: IPhoto[]) => {
        return results.reduce(
          (acc, r) => {
            acc[r.id] = r;
            return acc;
          },
          {} as PhotoMap,
        );
      }),
    );
  }

  checkScrollEnd(e) {
    const numItems = this.viewport.getDataLength();
    const end = this.viewport.getRenderedRange().end;
    if (end === numItems) {
      this.nextPage$.next(true);
    }
  }

  trackByIdx(i: number) {
    return i;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
