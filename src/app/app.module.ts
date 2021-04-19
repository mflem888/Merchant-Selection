import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantSelectionComponent } from './components/merchant-selection/merchant-selection.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { MerchantSelectionController } from './controllers/merchant-selection-controller';
import { MerchantNameFilterPipe } from './pipes/merchant-name-filter.pipe';
import { MerchantTypeFilterPipe } from './pipes/merchant-type-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const lookupLists = {
  merchantTypes: ["Guusto Card", "Coffee", "Drink"]
};

@NgModule({
  declarations: [
    AppComponent,
    MerchantSelectionComponent,
    MerchantComponent,  
    MerchantNameFilterPipe,
    MerchantTypeFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    MerchantSelectionController,
    { provide: 'lookupListToken', useValue: lookupLists }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
