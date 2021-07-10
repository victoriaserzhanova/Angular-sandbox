import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { BageModule } from '../bage/bage.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
  ],
  exports: [CardComponent],
})
export class CardModule { }
