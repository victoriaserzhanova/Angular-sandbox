import { Component, HostListener, Input, OnInit } from '@angular/core';
export type  triggerTypes = 'click' | 'hover';

@Component({
  selector: 'app-drop-down',
  template: `
  <div style="position: relative;">
    <div style="position: relative;">
      <app-button 
      btnText='dropdownMenu' 
      size='defaultSize'
      btnColor='primary'
      [isActive]='isOpen'
      (click)='openMenu()'> 
      </app-button>
    </div>

    <div *ngIf="isOpen" style="position: absolute; z-index: 100; width: 100%; border-radius: 10px; border: 1px solid #0099ff; background-color: rgb(130, 186, 238)">
      <app-menu></app-menu>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class DropDownComponent implements OnInit {
  @Input() isOpen:boolean = false;
  @Input() triggerType:triggerTypes = 'click';
  constructor() { 
  }
 
  ngOnInit(): void {
  }

  openMenu() {
    if (this.triggerType === 'click') {
      this.isOpen = !this.isOpen;
    }   
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.triggerType === 'hover') {
      this.isOpen = true;
    } 
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.triggerType === 'hover') {
      this.isOpen = false;
    } 
    console.log('leave');
  }
}
