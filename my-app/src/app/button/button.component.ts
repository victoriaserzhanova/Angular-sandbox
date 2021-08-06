import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { btnColors, btnSize, isActive, isDisabled } from '../types/btnType';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn"
    [ngClass]="[color]"
    [class.defaultSize]='size === "defaultSize"'
    [class.small]='size === "small"'
    [class.large]='size === "large"'
    [class.button-disabled]='isDisabled'
    [class.active]='innerActive'
    [attr.disabled]="isDisabled ? '' : null">
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
  .button-disabled { background-color: grey; border: 0px; }
  .active {
    cursor: default;
    border: 2px solid rgb(185, 185, 185);
  }
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

  innerActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { isActive } = changes;
    if (isActive && isActive.currentValue) {
      this.innerActive = isActive.currentValue;
    }
  }

}
