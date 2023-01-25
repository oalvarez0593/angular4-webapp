import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
    public title: string;
    public color: string;

    constructor(){
      this.color = GLOBAL.header_color;
      this.title = 'WebApp Productos';
    }
}
