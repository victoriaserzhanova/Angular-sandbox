import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { DropDownModule } from './drop-down/drop-down.module';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CardModule,
    IconTooltipModule,
    ButtonModule,
    DropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
