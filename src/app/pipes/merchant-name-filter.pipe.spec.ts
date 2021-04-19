import { Merchant } from '../dtos/merchant';
import { MerchantNameFilterPipe } from './merchant-name-filter.pipe';

describe('MerchantNameFilterPipe', () => {
  const choice1: Merchant = { 
    name: "Prepaid Mastercard® (Choice1)",
    image: "http://images.guusto.com/guusto/img/318.png",
    maxAmount: 2540.00,
    minAmount: 25.00,
    website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
    type: "DRINK"
  };

  const choice2: Merchant = { 
    name: "Prepaid Mastercard® (Choice2)",
    image: "http://images.guusto.com/guusto/img/318.png",
    maxAmount: 2540.00,
    minAmount: 25.00,
    website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
    type: "DRINK"
  };

  const choice3: Merchant = { 
    name: "Prepaid Mastercard® (Choice3)",
    image: "http://images.guusto.com/guusto/img/318.png",
    maxAmount: 2540.00,
    minAmount: 25.00,
    website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
    type: "DRINK"
  };
  
  const testData: Merchant[] = [ choice1, choice2, choice3 ];
  
  it('create an instance', () => {
    const pipe = new MerchantNameFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter to specific item', () => {
    const pipe = new MerchantNameFilterPipe();
    const result = pipe.transform(testData, "Choice3");

    expect(result.length).toBe(1);
    expect(result).toEqual([choice3]);
  });

  it('filter to group of items', () => {
    const pipe = new MerchantNameFilterPipe();
    let result = pipe.transform(testData, "Mastercard®");

    expect(result.length).toBe(3);
    expect(result).toEqual(testData);

    result = pipe.transform(testData, null);

    expect(result.length).toBe(3);
    expect(result).toEqual(testData);
  });

  it('filter to empty list', () => {
    const pipe = new MerchantNameFilterPipe();
    const result = pipe.transform(testData, "Mike");

    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });

  it('filter on empty list', () => {
    const pipe = new MerchantNameFilterPipe();
    const result = pipe.transform([], "Mike");

    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });
});
