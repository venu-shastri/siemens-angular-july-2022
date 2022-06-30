import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'angular-internals';
  changeProperty(){
    this.message="IP Pproperty Value Changed";
  }
}
