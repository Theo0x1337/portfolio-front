import { Component } from '@angular/core';  
import {Globals} from './globals'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Theo0x1337';
  private easterCounter: number;

  constructor(private globals: Globals) {
    this.easterCounter = globals.easterCounter;
  }

  //Tricheur 👀
  easterEgg(){
    window.open('https://i.makeagif.com/media/3-03-2021/cKq5TQ.gif', '_blank');
    this.globals.easterCounter++;
  }
}
