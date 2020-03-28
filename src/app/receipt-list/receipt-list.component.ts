import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Receipt, RECEIPTS, Comment, COMMENTS } from '../receipts';
import { ReceiptFilterPipe } from '../receipt-filter.pipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {

  constructor() { }
  // constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.receipt_list = data;
    // })
  }

  receipt_list = RECEIPTS;
  comments_list = COMMENTS;
  comment: Comment = new Comment;
  searchTerm: string;
  orderTerm: string;
  orderedReceipts: Receipt[];

  createComment() {
    this.comments_list.push(this.comment);
    this.comment = new Comment;
  }

  // funció per mostrar els detalls de la recepta
  showDetails(receipt: Receipt) {
    receipt.details = true;
  }

  // mostrar comentaris
  showComments(receipt: Receipt) {
    receipt.details = false;
  }

  editReceipt(receipt: Receipt) {
    receipt.edit_form = true;
  }

  cancelEdit(receipt: Receipt) {
    receipt.edit_form = false;
  }

  deleteReceipt(receipt: Receipt) {
    var removeIndex = this.receipt_list.map(function (item) { return item.id; }).indexOf(receipt.id);
    this.receipt_list.splice(removeIndex, 1);
  }

  updateReceipt() {

  }
}
