import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StockService} from './stock/service/stock.service';
import { EuroPipe } from './stock/euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
