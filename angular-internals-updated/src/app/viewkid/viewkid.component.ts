import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewkid',
  templateUrl: './viewkid.component.html',
  styleUrls: ['./viewkid.component.css']
})
export class ViewkidComponent implements OnInit {

  constructor() { 
    console.log("ViewkidComponent Constructor Called");
  }

  ngOnInit(): void {
    console.log("ViewkidComponent ngOnInt Called");
  }

}
