import { Component, OnInit, Input } from '@angular/core';
import { Receipt, RECEIPTS } from '../receipts';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  id = Date.now();
  receipts_list = RECEIPTS;
  receipt: Receipt = new Receipt();

  createReceipt() {
    this.receipt.id = this.id;
    this.receipt.details = true;
    this.receipt.edit_form = false;
    this.receipts_list.push(this.receipt);
    this.receipt = new Receipt();
    this.id = Date.now();
  }

}
