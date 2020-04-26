import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  @Input() news: any;
  constructor() { }

  ngOnInit(): void {
  }

}
