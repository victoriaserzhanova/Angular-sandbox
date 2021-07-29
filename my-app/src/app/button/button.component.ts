import { Component, Input, OnInit } from '@angular/core';
import { btnColors, btnSize, isActive, isDisabled } from '../types/btnType';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn"
    [ngClass]="[color]"
    [style.fontSize]="'20px'"
    [class.defaultSize]="size === 'defaultSize'">
    {{btnText}}
    </button>
  `,
  styles: [`
  .btn{ border-radius: 10px; border: 1px solid #0099ff; color: #ffffff}
  .default{background-color: #0099ff;}
  .defaultSize{ width: 174px; height: 40px; }
  `],
})
export class ButtonComponent implements OnInit {
  btnText = 'Click me';
  @Input() color: btnColors='default';
  @Input() size: btnSize='defaultSize';
  @Input() isActive: isActive=false
  @Input() isDisabled: isDisabled=false;

  constructor() { }

  ngOnInit(): void {
  }

}
