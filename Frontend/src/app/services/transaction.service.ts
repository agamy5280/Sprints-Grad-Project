import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}
  async sendTransaction(body: object) {
    return this.http.post(`${environment.apiURL}user/sellassetrequest`, body);
  }
  async acceptAsset(status: string) {
    console.log(status, "from service");
    const body = { status : status }
    return this.http.post(`${environment.apiURL}user/changeassetequitey`, body);
  }
  async showInvoices() {
    return this.http.get(`${environment.apiURL}user/userassetstransactions`);
  }
  getTransBillsRequest() {
    return this.http.get(`${environment.apiURL}admin/TransactionBills`);
  }

  getTransMoneyRequest() {
    return this.http.get(`${environment.apiURL}admin/TransactionMoney`);
  }


  
  getTransAssetsRequest() {
    return this.http.get(`${environment.apiURL}admin/TransactionAssets`);
  }
}
