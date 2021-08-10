import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { btnColors, btnSize, isActive, isDisabled } from '../types/btnType';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn"
    [ngClass]="[innerColor]"
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
  .btn{ border-radius: 10px; border: 1px solid #0099ff; color: #ffffff;
  opacity: 1;}
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
    opacity: 0.6;
  }
  .defaultSize{padding: 10px 15px;font-size: 16px;}
  .large {padding: 15px 25px;font-size: 16px;}
  .small {padding: 5px 10px;font-size: 12px;}

  `],
})
export class ButtonComponent implements OnInit,OnChanges {
  @Input() btnText = 'Click me';
  @Input() btnColor: btnColors='default';
  @Input() size: btnSize='defaultSize';
  @Input() isActive: isActive=false
  @Input() isDisabled: isDisabled=false;
  innerColor:btnColors = 'default';
  innerActive: boolean = false;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChanges): void {
    const { btnColor } = changes;
    const { isActive } = changes;
      if  ( btnColor && btnColor.currentValue ) {
        this.innerColor = btnColor.currentValue;
      }  

      if (isActive && isActive.currentValue) {
        this.innerActive = isActive.currentValue;
      }
    }
    

}
