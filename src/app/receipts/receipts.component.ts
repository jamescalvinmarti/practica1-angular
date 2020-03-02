import { Component, OnInit } from '@angular/core';
import { receipts } from '../receipts';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  receipts = receipts;

  constructor() { }

  ngOnInit(): void {
  }

}
