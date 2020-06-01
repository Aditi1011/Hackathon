import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

    @Input() public latitude: number;
    @Input() public longitude: number;

  constructor() { }

  ngOnInit() {
  }
}
