import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output()
  passHeightToSideNav = new EventEmitter<number>();

  constructor(titleService: Title, private cd: ChangeDetectorRef) {
    titleService.setTitle('Virtual Scroll demo');
  }
}
