import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IPhoto, PhotosService } from '../services/photos-service';
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
  photos$: Observable<IPhoto[]>;
  destroy$ = new Subject<void>();
  dataSource: Observable<IPhoto[]>;

  displayedColumns: string[] = ['id', 'albumId', 'title', 'url', 'thumbnailUrl'];

  constructor(private service: PhotosService) {}

  ngOnInit() {
    this.photos$ = this.service.getBatch$(1);
    this.dataSource = combineLatest(this.photos$).pipe(
      map(values => values[0]),
      takeUntil(this.destroy$),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
