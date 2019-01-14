import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StockService} from './stock/service/stock.service';
import { EuroPipe } from './stock/euro.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatToolbarModule} from '@angular/material';
import { DescriptionModalComponent } from './stock/component/description-modal/description-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    EuroPipe,
    DescriptionModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  entryComponents: [DescriptionModalComponent],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
