import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {key} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'http://localhost:3000/ps4/getnews';
  // connect to backend api in PS4
  getNews(searchterm){
    return this.http.get(this.url, {params: {search: searchterm}});
  }

  constructor(private http: HttpClient) { }
}
