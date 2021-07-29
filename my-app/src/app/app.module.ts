import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    DropdownModule,
    IconTooltipModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
