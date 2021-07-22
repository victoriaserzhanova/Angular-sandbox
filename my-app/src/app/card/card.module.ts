import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { BageModule } from '../bage/bage.module';
import { RatingModule } from '../rating/rating.module';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    RatingModule,
    IconModule
  ],
  exports: [CardComponent],
})
export class CardModule { }
