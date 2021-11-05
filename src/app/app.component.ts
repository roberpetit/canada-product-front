import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canadaProductFront';
  showTable = true;

  changeShowTable(value:any) {
    console.log(value)
    this.showTable = value
  }
}
