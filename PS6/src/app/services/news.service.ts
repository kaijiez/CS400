import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {key} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'https://newsapi.org/v2/everything?';
  getNews(searchterm){
    return this.http.get(`${this.url}q=${searchterm}&pageSize=5&page=1&apiKey=${key}`);
  }

  constructor(private http: HttpClient) { }
}
