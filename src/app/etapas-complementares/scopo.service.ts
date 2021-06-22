import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GitModel } from '../models/git.model';
import { Result } from './scopo-base.model';

@Injectable({
  providedIn: 'root'
})
export class ScopoService {

  constructor(private http: HttpClient) { }

  retornaGenerico():Observable<Object>{
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { headers })
  }

  outroRetornaGenerico():Observable<any>{
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get<Result[]>('https://api.npms.io/v2/search?q=scope:angular', { headers }, )
  }






}
