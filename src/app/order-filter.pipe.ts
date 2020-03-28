import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Receipt, RECEIPTS } from './receipts';

@Pipe({
    name: 'orderFilter',
    pure: false
})
export class OrderFilterPipe implements PipeTransform {
    transform(receipts: Receipt[], orderTerm: string): Receipt[] {
        if (!receipts || !orderTerm) {
            return receipts;
        }

        if (orderTerm == '1') {
            return receipts.sort((a, b) => a.name.localeCompare(b.name))
        } else if (orderTerm = '2') {
            return receipts.sort((a, b) => b.name.localeCompare(a.name))
        }
    }
}