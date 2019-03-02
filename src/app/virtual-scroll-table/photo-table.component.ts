import { CdkVirtualScrollViewport, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Component, Directive, forwardRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { concatMap, distinctUntilChanged, map, scan, share, takeUntil, tap } from 'rxjs/operators';
import { IPhoto, PhotoMap, PhotosService } from '../services/photos-service';
import { TableVirtualScrollStrategy } from './table-virtual-scroll-strategy';

@Component({
  selector: 'app-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.scss'],
})
export class PhotoTableComponent implements OnInit, OnDestroy {
  static basePageOffset = 301;
  static limit = 10;

  displayedColumns = ['id', 'albumId', 'title', 'url', 'thumbnailUrl'];
  rowHeight = 60;
  headerHeight = 60;
  gridHeight = 0;
  theEnd = false;
  scrollPosition = 0;

  photos$: Observable<IPhoto[]>;
  dataSource$: Observable<IPhoto[]>;
  photoLength$: Observable<number>;
  nextData$ = new BehaviorSubject(0);
  destroy$ = new Subject<void>();

  @ViewChild(CdkVirtualScrollViewport)
  tableViewPort: CdkVirtualScrollViewport;

  constructor(private service: PhotosService) {}

  ngOnInit() {
    this.gridHeight = this.tableViewPort.elementRef.nativeElement.clientHeight;
    this.photos$ = this.nextData$.asObservable().pipe(
      distinctUntilChanged(),
      tap(endOffset => console.log('endOffset', endOffset)),
      concatMap(endOffset => this.getBatch$(endOffset)),
      scan((acc, photos) => ({ ...acc, ...photos }), {}),
      map((results: PhotoMap) => Object.keys(results).reduce((acc, k) => acc.concat(results[k]), [] as IPhoto[])),
      share(),
      takeUntil(this.destroy$),
    );

    this.dataSource$ = combineLatest(this.photos$, this.tableViewPort.renderedRangeStream).pipe(
      tap(value => console.log('in dataSource$', value)),
      map(values => {
        const [photos, range] = values;
        return photos.slice(range.start, range.end);
      }),
      takeUntil(this.destroy$),
    );

    this.photoLength$ = this.photos$.pipe(map(v => v.length));
  }

  getBatch$(endOffset: number) {
    const pageOffset = PhotoTableComponent.basePageOffset + Math.floor(endOffset / PhotoTableComponent.limit);
    return this.service.getBatch$(pageOffset, PhotoTableComponent.limit).pipe(
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

  nextBatch$() {
    if (this.theEnd) {
      return;
    }
    this.scrollPosition = -this.tableViewPort.getOffsetToRenderedContentStart();

    const numItems = this.tableViewPort.getDataLength();
    const end = this.tableViewPort.getRenderedRange().end;

    if (numItems === end) {
      this.nextData$.next(end);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export function scrollStrategyFactory(scroll: TableFixedSizeVirtualScrollDirective) {
  return scroll.scrollStrategy;
}

@Directive({
  selector: '[tableFixedSizeVirtualScroll]',
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: scrollStrategyFactory,
      deps: [forwardRef(() => TableFixedSizeVirtualScrollDirective)],
    },
  ],
})
export class TableFixedSizeVirtualScrollDirective implements OnChanges {
  @Input()
  scrollHeight: number;

  @Input()
  scrollHeader: number;

  scrollStrategy = new TableVirtualScrollStrategy(this.scrollHeight, this.scrollHeader);

  ngOnChanges() {
    this.scrollStrategy.setScrollHeight(this.scrollHeight, this.scrollHeader);
  }
}
