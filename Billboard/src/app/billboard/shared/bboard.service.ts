import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import {Bboard} from './bboard.model';
//import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { IBillboard } from '../../billboard';
import { Observable } from '../../../../node_modules/rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BboardService {

  selectedBboard : Bboard;
  private _url: string = "http://localhost:51014/api/BillboardModels";
  
  constructor(private http: HttpClient) { }

    /** POST: add a new hero to the database */
  postBboard (data: Bboard): Observable<Bboard> {
    
    var body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Bboard>(this._url, body, httpOptions);
  }
}

