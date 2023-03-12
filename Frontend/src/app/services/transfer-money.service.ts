import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TransferMoneyService {

  constructor(private http: HttpClient) {}


  sendMoneyRequest(data: object) {
    return this.http.patch(`${environment.apiURL}user/sendMoney`, data);
  }
}
