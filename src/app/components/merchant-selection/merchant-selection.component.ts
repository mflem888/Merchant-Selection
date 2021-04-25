import { Component, Inject, OnInit } from '@angular/core';
import { MerchantSelectionController } from 'src/app/controllers/merchant-selection-controller';
import { Merchant } from 'src/app/dtos/merchant';
import { lookupListsToken } from 'src/app/providers/lookup-list-token';

@Component({
  selector: 'merchant-selection',
  templateUrl: './merchant-selection.component.html',
  styleUrls: ['./merchant-selection.component.sass']
})
export class MerchantSelectionComponent implements OnInit {
  public merchants: Merchant[];
  public searchText: string = '';
  public typeFilter: string = null;

  constructor(
    private merchantController: MerchantSelectionController,
    @Inject(lookupListsToken) public lookupLists) { }

  ngOnInit(): void {
    this.getMerchants();
  }

  getMerchants(): void{
    this.merchantController.getMerchants()
    .subscribe(merchants => {
        this.merchants = merchants;
    });
  }
}
