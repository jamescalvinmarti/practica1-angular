import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewReceiptsComponent } from './new-receipts/new-receipts.component';
import { RouterModule } from '@angular/router';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptDetailsComponent } from './receipt-details/receipt-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptsComponent,
    NewReceiptsComponent,
    ReceiptDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ReceiptsComponent },
      { path: 'receipts/:receiptId', component: ReceiptDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
