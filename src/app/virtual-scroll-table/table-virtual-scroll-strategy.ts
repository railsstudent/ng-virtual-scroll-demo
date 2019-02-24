import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class TableVirtualScrollStrategy implements VirtualScrollStrategy {
  public scrolledIndexChange: Observable<number>;
  private scrollHeight: number;
  private scrollHeader: number;
  private indexChange = new Subject<number>();
  private viewport: CdkVirtualScrollViewport;

  constructor() {
    this.scrolledIndexChange = this.indexChange.asObservable().pipe(distinctUntilChanged());
  }

  attach(viewport: CdkVirtualScrollViewport): void {
    this.viewport = viewport;
    this.onDataLengthChanged();
    this.updateContent(viewport);
  }

  detach(): void {}

  onContentScrolled(): void {
    this.updateContent(this.viewport);
  }

  onDataLengthChanged(): void {
    if (this.viewport) {
      this.viewport.setTotalContentSize(this.viewport.getDataLength() * this.scrollHeight);
    }
  }

  onContentRendered(): void {}

  onRenderedOffsetChanged(): void {}

  scrollToIndex(_index: number, _behavior: ScrollBehavior): void {}

  public setScrollHeight(rowHeight: number, headerHeight: number) {
    this.scrollHeight = rowHeight;
    this.scrollHeader = headerHeight;
    this.updateContent(this.viewport);
  }

  private updateContent(viewport: CdkVirtualScrollViewport) {
    if (this.viewport) {
      const newIndex = Math.max(0, Math.round((viewport.measureScrollOffset() - this.scrollHeader) / this.scrollHeight) - 2);
      viewport.setRenderedContentOffset(this.scrollHeight * newIndex);
      const nextIndex = Math.round((viewport.measureScrollOffset() - this.scrollHeader) / this.scrollHeight) + 1;
      this.indexChange.next(nextIndex);
    }
  }
}
