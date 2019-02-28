import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TableVirtualScrollStrategy implements VirtualScrollStrategy {
  public scrolledIndexChange: Observable<number>;
  private scrollHeight: number;
  private scrollHeader: number;
  private indexChange = new Subject<number>();
  private viewport: CdkVirtualScrollViewport;

  private readonly bufferSize = 5;

  constructor() {
    this.scrolledIndexChange = this.indexChange.asObservable(); //.pipe(distinctUntilChanged());
  }

  attach(viewport: CdkVirtualScrollViewport): void {
    this.viewport = viewport;
    this.onDataLengthChanged();
  }

  detach(): void {}

  onContentScrolled(): void {
    this.updateContent(this.viewport);
  }

  onDataLengthChanged(): void {
    if (this.viewport) {
      this.viewport.setTotalContentSize(this.viewport.getDataLength() * this.scrollHeight);
      this.updateContent(this.viewport);
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
      const range = Math.ceil(viewport.getViewportSize() / this.scrollHeight) + this.bufferSize * 2;
      const newIndex = Math.max(0, Math.round((viewport.measureScrollOffset() - this.scrollHeader) / this.scrollHeight) - this.bufferSize);
      const dataLength = this.viewport.getDataLength();

      const start = Math.max(0, newIndex - this.bufferSize);
      const end = Math.min(dataLength, newIndex + range);

      viewport.setRenderedContentOffset(this.scrollHeight * start);
      viewport.setRenderedRange({ start, end });

      this.indexChange.next(newIndex);
    }
  }
}
