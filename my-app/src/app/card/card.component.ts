import { Component, OnInit, Input } from '@angular/core';
import { product } from '../data/product.data';
import { Product, ProductBage } from '../types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product
  constructor() {

  }

  ngOnInit(): void {
  }


}
