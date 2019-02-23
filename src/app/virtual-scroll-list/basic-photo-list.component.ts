import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-photo-list',
  template: `
    <p>
      basic-virtural-scroll-list works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicScrollPhotoListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
