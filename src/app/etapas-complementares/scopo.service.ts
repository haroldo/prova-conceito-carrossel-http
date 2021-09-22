import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GitModel } from '../models/git.model';
import { Result } from './scopo-base.model';
import { retry } from 'rxjs/internal/operators/retry';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScopoService {

  constructor(private http: HttpClient) { }

  retornaGenerico():Observable<Object>{
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { headers })
  }

  //tipar
  outroRetornaGenerico():Observable<GitModel<Result>>{
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get<GitModel<Result>>('https://api.npms.io/v2/search?q=scope:angular', { headers }, )
  }


  getEmployee(): Observable<any> {
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', { headers })
    .pipe(
      retry(1),
    )
  }




}
