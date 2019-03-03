import { CdkVirtualScrollViewport, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, Directive, Inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { concatMap, distinctUntilChanged, map, scan, share, takeUntil, tap } from 'rxjs/operators';
import { IPhoto, PhotoMap, PhotosService } from '../services/photos-service';
import { TableVirtualScrollStrategy } from './table-virtual-scroll-strategy';

@Directive({
  selector: '[tableFixedSizeVirtualScroll]',
})
export class TableFixedSizeVirtualScrollDirective {
  @Input()
  scrollHeight = 0;

  @Input()
  scrollHeader = 0;
}

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
export class PhotoTableComponent implements OnInit, OnDestroy, AfterViewInit {
  static basePageOffset = 301;
  static limit = 10;

  displayedColumns = ['id', 'albumId', 'title', 'url', 'thumbnailUrl'];
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

  @ViewChild(TableFixedSizeVirtualScrollDirective)
  tableFixedSizeDirective: TableFixedSizeVirtualScrollDirective;

  constructor(@Inject(VIRTUAL_SCROLL_STRATEGY) private scrollStrategy: TableVirtualScrollStrategy, private service: PhotosService) {}

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

  ngAfterViewInit(): void {
    const { scrollHeight, scrollHeader } = this.tableFixedSizeDirective;
    this.scrollStrategy.setScrollHeight(scrollHeight, scrollHeader);
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
