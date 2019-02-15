import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, scan } from 'rxjs/operators';
import { IPhoto, PhotosService } from './services/photos-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-virtual-scroll-demo';

  photos$: Observable<IPhoto[]>;
  page$ = new BehaviorSubject(1);

  constructor(titleService: Title, private photosService: PhotosService) {
    titleService.setTitle('Virtual scroll demo');
  }

  ngOnInit() {
    this.photos$ = this.page$.pipe(
      concatMap(pageNumber => this.photosService.getBatch$(pageNumber, 8)),
      scan((acc, photos) => [...acc, ...photos], []),
    );
  }
}
