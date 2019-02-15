import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPhoto } from './types';

const URL = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getBatch$(page = 1, limit = 10) {
    const paginatedURL = `${URL}?_page=${page}&_limit=${limit}`;
    return this.http.get<IPhoto[]>(paginatedURL).pipe(
      catchError(err => {
        console.error(err);
        return of([] as IPhoto[]);
      }),
    );
  }
}
