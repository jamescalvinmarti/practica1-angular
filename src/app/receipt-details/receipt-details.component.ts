import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { receipts } from '../receipts';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {
  receipt;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.receipt = receipts[+params.get('receiptId')];
    });
  }

}
