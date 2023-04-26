import { Component } from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
  }
}
