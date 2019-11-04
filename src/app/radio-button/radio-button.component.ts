import { Component, OnInit } from '@angular/core';
import { UiElement } from './ui-element.model';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  list: Array<UiElement> = new Array;

  constructor() {

   }

  ngOnInit() {

    let element:UiElement = new UiElement(null, "TEXTO");

    this.list.push(element);

    console.log(this.list);
  }

} 