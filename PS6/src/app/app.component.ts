import { Component } from '@angular/core';
import { NewsArticles} from './NewsArticles-Mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  articles = NewsArticles;
}
