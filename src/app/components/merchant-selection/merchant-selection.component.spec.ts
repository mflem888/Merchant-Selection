import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { MerchantSelectionController } from 'src/app/controllers/merchant-selection-controller';
import { Merchant } from 'src/app/dtos/merchant';
import { MerchantNameFilterPipe } from 'src/app/pipes/merchant-name-filter.pipe';
import { MerchantTypeFilterPipe } from 'src/app/pipes/merchant-type-filter.pipe';
import { MerchantComponent } from '../merchant/merchant.component';

import { MerchantSelectionComponent } from './merchant-selection.component';

const lookupLists = {
  merchantTypes: ["Guusto Card", "Coffee", "Drink"]
};

describe('MerchantSelectionComponent', () => {
  let component: MerchantSelectionComponent;
  let fixture: ComponentFixture<MerchantSelectionComponent>;

  let mockController: jasmine.SpyObj<MerchantSelectionController>;
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

  beforeEach(async () => {
    mockController = jasmine.createSpyObj('MerchantSelectionController', ['getMerchants']);

    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        AppComponent,
        MerchantSelectionComponent,
        MerchantComponent,  
        MerchantNameFilterPipe,
        MerchantTypeFilterPipe
      ],
      providers: [
        { provide: MerchantSelectionController, value: mockController },
        { provide: 'lookupListToken', useValue: lookupLists }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should load list of merchants', () => {
    const merchants: Merchant[] = testData;
    mockController.getMerchants.and.returnValue(of(merchants));
    fixture.detectChanges();

    expect(mockController.getMerchants).toHaveBeenCalled();
    expect(component.merchants).toEqual(merchants);
    expect(component.merchants.length).toEqual(3);
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Select a Merchant');
  });

});
