import { Component, OnInit } from '@angular/core';
import {Comp2Component} from 'lib-path-mapping/comp2';

@Component({
  selector: 'lib-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Comp2Component();
  }

}
