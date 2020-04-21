import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RootObjects } from '../models/rootobject';

@Injectable()
export class UserDataService {
  baseURL = 'https://instagram.com/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  fetchUsers(search: string): Observable<RootObjects> {
    return this.http.get<RootObjects>(
      'https://instagram.com/' + search + '?__a=1'
    );
  }
}
