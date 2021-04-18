import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Merchant } from '../dtos/merchant';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }

  // https://staging.guusto.io:8443/merchant/merchant/findAllWithoutLimit
  private baseUrl: string = 'https://staging.guusto.io:8443';
  private merchantApi: string = this.baseUrl + '/merchant/merchant';

  getWithoutLimit(): Observable<Merchant[]> {
    const getOptions = {
      params: { }
    };
    
    return this.http.get<Merchant[]>(this.merchantApi + '/findAllWithoutLimit')
      .pipe(
        map((response: Merchant[]) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}
