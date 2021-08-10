import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <div>
    <li>section1</li>
    <li>section2</li>
    <li>section3</li>
  </div>

  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
