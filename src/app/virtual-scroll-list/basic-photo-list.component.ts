import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, share, takeUntil } from 'rxjs/operators';
import { IPhoto, PhotosService } from '../services/photos-service';

@Component({
  selector: 'app-basic-photo-list',
  template: `
    <app-title>Basic Virtual Scroll List (No. of records: {{ photoCount$ | async }})</app-title>
    <ng-container *ngIf="(photos$ | async) as photos">
      <cdk-virtual-scroll-viewport #viewport class="viewport" [itemSize]="160">
        <div *cdkVirtualFor="let photo of photos; let i = index; trackBy: trackByIdx" class="animated fadeInRight slow">
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
export class BasicScrollPhotoListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  photos$: Observable<IPhoto[]>;
  photoCount$: Observable<number>;

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photos$ = this.photoService.getAll$().pipe(
      share(),
      takeUntil(this.destroy$),
    );
    this.photoCount$ = this.photos$.pipe(map(p => p.length));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByIdx(i: number) {
    return i;
  }
}
