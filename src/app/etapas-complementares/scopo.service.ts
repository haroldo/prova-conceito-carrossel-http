import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScopoService {

  constructor(private http: HttpClient) { }

  retornaGenerico():Observable<any>{
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get<Observable<any>>('https://jsonplaceholder.typicode.com/comments', { headers })
  }

  outroRetornaGenerico():Observable<any>{
    const headers = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', { headers })
  }






}
