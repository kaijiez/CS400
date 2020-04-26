import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewsService} from '../services/news.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  term: string;
  news: any;

  @Output() newsEvent = new EventEmitter<object>();

  searchTerm = this.form.group({
    searchterm: ['', [Validators.required, Validators.minLength(1)]],
  });

  getArticle(){
      this.term = this.searchTerm.get('searchterm').value;
      console.log(this.term);
      const body = 'articles';
      this.news = this.ns.getNews(this.term).subscribe(
        response => {
          console.log('reponse get back!');
          this.news = response[body];
          console.table(this.news);
          // send data to parent app component
          this.sendnews();
        }

      );
  }

  sendnews() {
    this.newsEvent.emit(this.news);
  }
  constructor(private form: FormBuilder, private ns: NewsService) { }

  ngOnInit(): void {
  }

}
