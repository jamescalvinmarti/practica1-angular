import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReceiptFormComponent } from './receipt-form/receipt-form.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReceiptFilterPipe } from './receipt-filter.pipe';
import { OrderFilterPipe } from './order-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptFormComponent,
    ReceiptListComponent,
    ReceiptFilterPipe,
    OrderFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
