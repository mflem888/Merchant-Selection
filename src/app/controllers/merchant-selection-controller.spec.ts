import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { MerchantService } from '../services/merchant.service';
import { MerchantSelectionController } from './merchant-selection-controller';

describe('MerchantSelectionController', () => {
  let mockService: jasmine.SpyObj<MerchantService>;
  let controller: MerchantSelectionController;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('merchantService', [
      'getWithoutLimit',
    ]);
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
          ],
          declarations: [
            AppComponent
          ],
      providers: [
        { provide: MerchantService, useValue: mockService },
        MerchantSelectionController 
      ]
    });
  });

  beforeEach(inject([MerchantSelectionController], (merchantSelectController: MerchantSelectionController) => {
    controller = merchantSelectController;
  }));

  describe('getMerchants', () => {
    it('calls merchant service getWithoutLimit', () => {
      controller.getMerchants();
      expect(mockService.getWithoutLimit).toHaveBeenCalledWith();
    });
  });
});
