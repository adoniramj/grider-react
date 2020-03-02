import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Adoniram J. Vargas";

  constructor() {
    console.log('Hello World')
    this.changeName('John Doe')
  }

  changeName(name:string):void {
    this.name = name
  }
}
