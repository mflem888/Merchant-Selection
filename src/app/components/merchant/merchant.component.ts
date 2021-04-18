import { Component, Input, OnInit } from '@angular/core';
import { Merchant } from 'src/app/dtos/merchant';

@Component({
  selector: 'merchant-item',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.sass']
})
export class MerchantComponent implements OnInit {
  @Input() merchant: Merchant;

  constructor() { }

  ngOnInit(): void {
  }

  public DisplayPriceRange(): string{
    return '$' + this.merchant.minAmount + ' - $' + this.merchant.maxAmount;
  }
}
