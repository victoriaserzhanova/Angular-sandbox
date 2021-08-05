import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { btnColors, btnSize, isActive, isDisabled } from '../types/btnType';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn"
    [ngClass]="[color]"
    [class.defaultSize]='size === "defaultSize"'
    [class.small]='size === "small"'
    [class.large]='size === "large"'
    [disabled]="isDisabled">
    {{btnText}}
    </button>
  `,
  styles: [`
  .btn{ border-radius: 10px; border: 1px solid #0099ff; color: #ffffff}
  .btn:not(.active):not(.button-disabled):hover {
    cursor: pointer;
  }
  .default {background-color: #0099ff;}
  .primary {background-color: #3f51b5;}
  .accent {background-color: #ff4081;}
  .success {background-color: #27b536;}
  .warning {background-color: #ff0040;}
  .defaultSize{padding: 10px 15px;font-size: 16px;}
  .large {padding: 15px 25px;font-size: 16px;}
  .small {padding: 5px 10px;font-size: 12px;}
  `],
})
export class ButtonComponent implements OnInit,OnChanges {
  @Input() btnText = 'Click me';
  @Input() color: btnColors='default';
  @Input() size: btnSize='defaultSize';
  @Input() isActive: isActive=false
  @Input() isDisabled: isDisabled=false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.isActive) {
      this.color = 'accent'
      this.size = 'large'
    }
  }

}
