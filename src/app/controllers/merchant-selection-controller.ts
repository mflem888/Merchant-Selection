import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Merchant } from "../dtos/merchant";
import { MerchantService } from "../services/merchant.service";

@Injectable()
export class MerchantSelectionController {
    constructor(private merchantService: MerchantService){}

    public getMerchants(): Observable<Merchant[]> {
        return this.merchantService.getWithoutLimit();
    }
}