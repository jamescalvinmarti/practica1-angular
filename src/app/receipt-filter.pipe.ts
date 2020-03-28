import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Receipt, RECEIPTS } from './receipts';

@Pipe({
    name: 'receiptFilter'
})
export class ReceiptFilterPipe implements PipeTransform {
    transform(receipts: Receipt[], searchTerm: string): Receipt[] {
        if (!receipts || !searchTerm) {
            return receipts;
        }

        return receipts.filter(receipt =>
            receipt.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}