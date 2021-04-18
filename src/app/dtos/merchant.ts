export class MerchantsResponse{
    Merchants: Merchant[];
}

export class Merchant {
    type?: string;
    name: string;
    minAmount: number; // fromAmount
    maxAmount: number; // toAmount
    image: string;
    website: string;
}

export enum MerchantType{
    GuustoCard,
    Coffee,
    Drink
}
