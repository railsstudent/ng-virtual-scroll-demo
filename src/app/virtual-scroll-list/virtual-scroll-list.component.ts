import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll-list',
  template: `
    <p>
      virtual-scroll-list works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
