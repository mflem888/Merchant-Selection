import { Merchant } from '../dtos/merchant';
import { MerchantTypeFilterPipe } from './merchant-type-filter.pipe';

describe('MerchantTypeFilterPipe', () => {
  const guustoCard: Merchant[] = [{ 
    name: "Prepaid Mastercard® (Choice)",
    image: "http://images.guusto.com/guusto/img/318.png",
    maxAmount: 2540.00,
    minAmount: 25.00,
    website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
    type: null
  }];

  const drinkMerchants: Merchant[] = [
    { 
      name: "Prepaid Mastercard® (Choice3)",
      image: "http://images.guusto.com/guusto/img/318.png",
      maxAmount: 2540.00,
      minAmount: 25.00,
      website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
      type: "DRINK"
    },
    { 
      name: "Prepaid Mastercard® (Choice4)",
      image: "http://images.guusto.com/guusto/img/318.png",
      maxAmount: 2540.00,
      minAmount: 25.00,
      website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
      type: "drink"
    }
  ];

  const coffeeMerchants: Merchant[] = [{ 
    name: "Prepaid Mastercard® (Choice2)",
    image: "http://images.guusto.com/guusto/img/318.png",
    maxAmount: 2540.00,
    minAmount: 25.00,
    website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
    type: "COFFEE"
  }];

  const testData: Merchant[] = [ ...guustoCard, ...drinkMerchants, ...coffeeMerchants] ;

  it('create an instance', () => {
    const pipe = new MerchantTypeFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter on DRINK', () => {
      const pipe = new MerchantTypeFilterPipe();
      const result = pipe.transform(testData, "DRINK");

      expect(result).toEqual(drinkMerchants);
  });

  it('filter on COFFEE', () => {
    const pipe = new MerchantTypeFilterPipe();
    const result = pipe.transform(testData, "COFFEE");

    expect(result).toEqual(coffeeMerchants);
  });

  it('filter on Guusto Card', () => {
    const pipe = new MerchantTypeFilterPipe();
    const result = pipe.transform(testData, "Guusto Card");

    expect(result).toEqual(guustoCard);
  });

  it('filter on invalid type', () => {
    const pipe = new MerchantTypeFilterPipe();
    const result = pipe.transform(testData, "Other");

    expect(result).toEqual([]);
  });

  it('filter on no type', () => {
    const pipe = new MerchantTypeFilterPipe();
    const result = pipe.transform(testData, null);

    expect(result).toEqual(testData);
  });

  it('filter on empty list', () => {
    const pipe = new MerchantTypeFilterPipe();
    const result = pipe.transform([], "Drink");

    expect(result).toEqual([]);
  });
});
