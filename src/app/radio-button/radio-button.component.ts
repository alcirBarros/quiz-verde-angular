import { Component, OnInit, Input } from '@angular/core';
import { UiElement } from './ui-element.model';

@Component({
  selector: 'h:radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input('uiElementArray')
  list: Array<UiElement> = new Array;

  constructor() {

  }

  ngOnInit() {
    console.log(this.list);
  }

} 