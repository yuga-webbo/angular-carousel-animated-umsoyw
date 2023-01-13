import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule ],
  declarations: [ AppComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
