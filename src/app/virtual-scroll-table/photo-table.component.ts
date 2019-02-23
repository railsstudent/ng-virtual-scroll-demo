import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPhoto, PhotosService } from '../services/photos-service';

@Component({
  selector: 'app-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.scss'],
})
export class PhotoTableComponent implements OnInit, OnDestroy {
  photos$: Observable<IPhoto[]>;
  destroy$ = new Subject();
  dataSource: Observable<IPhoto[]>;

  constructor(private service: PhotosService) {}

  ngOnInit() {
    this.photos$ = this.service.getAll$().pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
