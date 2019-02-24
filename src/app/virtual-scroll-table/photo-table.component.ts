import { CdkVirtualScrollViewport, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { concatMap, map, scan, takeUntil, tap } from 'rxjs/operators';
import { IPhoto, PhotoMap, PhotosService } from '../services/photos-service';
import { TableVirtualScrollStrategy } from './table-virtual-scroll-strategy';

@Component({
  selector: 'app-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.scss'],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: TableVirtualScrollStrategy,
    },
  ],
})
export class PhotoTableComponent implements OnInit, OnDestroy {
  // Manually set the amount of buffer and the height of the table elements
  static BUFFER_SIZE = 3;

  displayedColumns: string[] = ['id', 'albumId', 'title', 'url', 'thumbnailUrl'];
  rowHeight = 60;
  headerHeight = 60;
  gridHeight = 0;
  pageOffset = 401;
  theEnd = false;

  photos$: Observable<IPhoto[]>;
  dataSource: Observable<IPhoto[]>;
  nextData$ = new BehaviorSubject(true);
  destroy$ = new Subject<void>();

  @ViewChild(CdkVirtualScrollViewport)
  tableViewPort: CdkVirtualScrollViewport;

  constructor(
    @Inject(VIRTUAL_SCROLL_STRATEGY)
    private scrollStrategy: TableVirtualScrollStrategy,
    private service: PhotosService,
  ) {}

  ngOnInit() {
    this.gridHeight = this.tableViewPort.elementRef.nativeElement.clientHeight;
    const range = Math.ceil(this.gridHeight / this.rowHeight) + PhotoTableComponent.BUFFER_SIZE;
    this.scrollStrategy.setScrollHeight(this.rowHeight, this.headerHeight);
    this.photos$ = this.nextData$.asObservable().pipe(
      // tap(() => console.log('before throttleTime', this.pageOffset)),
      // throttleTime(500),
      tap(() => console.log('In photo$, pageOffset', this.pageOffset)),
      concatMap(() => this.getBatch$()),
      scan((acc, photos) => ({ ...acc, ...photos }), {}),
      map((results: PhotoMap) => {
        return Object.keys(results).reduce((acc, k) => acc.concat(results[k]), [] as IPhoto[]);
      }),
      takeUntil(this.destroy$),
    );

    this.dataSource = combineLatest(this.photos$, this.scrollStrategy.scrolledIndexChange).pipe(
      map(values => {
        const [photos, index] = values;
        const start = Math.max(0, index - PhotoTableComponent.BUFFER_SIZE);
        const end = Math.min(photos.length, index + range);
        const displayRange = photos.slice(start, end);
        console.log('range', range, 'index', index, 'start', start, 'end', end);
        return [end === photos.length, displayRange];
      }),
      tap(values => {
        if (values[0]) {
          console.log('old pageOffset', this.pageOffset);
          this.pageOffset = this.pageOffset + 1;
          this.nextData$.next(true);
        }
      }),
      map(values => values[1] as IPhoto[]),
      takeUntil(this.destroy$),
    );
  }

  getBatch$() {
    // console.log('pageOffset', this.pageOffset);
    return this.service.getBatch$(this.pageOffset, 10).pipe(
      tap((results: IPhoto[]) => {
        if (!results.length) {
          this.theEnd = true;
        }
      }),
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
