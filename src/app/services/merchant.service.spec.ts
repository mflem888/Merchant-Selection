import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MerchantService } from './merchant.service';
import { Merchant } from '../dtos/merchant';

describe('MerchantService', () => {
  let service: MerchantService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const testData: Merchant[] = [
    { 
      name: "Prepaid Mastercard® (Choice)",
      image: "http://images.guusto.com/guusto/img/318.png",
      maxAmount: 2540.00,
      minAmount: 25.00,
      website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
      type: null
    },
    { 
      name: "Prepaid Mastercard® (Choice2)",
      image: "http://images.guusto.com/guusto/img/318.png",
      maxAmount: 2540.00,
      minAmount: 25.00,
      website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
      type: "COFFEE"
    },
    { 
      name: "Prepaid Mastercard® (Choice3)",
      image: "http://images.guusto.com/guusto/img/318.png",
      maxAmount: 2540.00,
      minAmount: 25.00,
      website: "https://help.guusto.com/redeeming-gifts/how-do-i-redeem-a-guusto-gift-for-a-prepaid-mastercard",
      type: "DRINK"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MerchantService);
  });

  afterEach(() => { httpTestingController.verify() });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get merchant list', () => {
    service.getWithoutLimit().subscribe((merchants: Merchant[]) => {
      expect(merchants).toEqual(testData);
    });

    const getRequest = httpTestingController.expectOne('https://staging.guusto.io:8443/merchant/merchant/findAllWithoutLimit');
    expect(getRequest.request.method).toEqual('GET');
    getRequest.flush(testData);
  });

});
