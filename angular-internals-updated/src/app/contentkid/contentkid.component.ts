import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentkid',
  templateUrl: './contentkid.component.html',
  styleUrls: ['./contentkid.component.css']
})
export class ContentkidComponent implements OnInit {

  constructor() { 
    console.log("ContentkidComponent Constructor Called");
  }

  ngOnInit(): void {
    console.log("ContentkidComponent ngOnInt Called");
  }

}
