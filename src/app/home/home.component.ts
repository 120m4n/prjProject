import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title: any;
valueIconRight: any;
value3: any;
value1: any;
value11: any;
value4: any;

constructor() {
  this.title = 'Home';
}

upper() {
  this.title = this.title.toUpperCase();
}

}
