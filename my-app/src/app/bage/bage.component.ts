import { Component, OnInit, Input } from '@angular/core';
import { product } from '../data/product.data';
import { ProductBage, Product } from '../types/card';

@Component({
  selector: 'app-bage',
  template: `
  <div class="bage">
  <!-- bageComp {{bage.text}} -->
  </div>
  `,
  styleUrls: ['./bage.component.scss']
})
export class BageComponent implements OnInit {
  @Input() bage: Product

  constructor() { }

  ngOnInit(): void {
  }
}
