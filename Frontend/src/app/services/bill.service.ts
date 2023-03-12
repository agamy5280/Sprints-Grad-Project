import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient, private userService: UserService) {}
  async getBills(id: string) {
    return this.http.get(`${environment.apiURL}user/bill/show/${id}`);
  }

  async getUserBills(id: string) {
    return this.http.get(`${environment.apiURL}admin/bill/show/${id}`);
  }

  getAllBills() {
    return this.http.get(`${environment.apiURL}admin/bill`);
  }

  addBillRequest(data: object) {
    return this.http.post(`${environment.apiURL}admin/bill/add`, data);
  }
  async payBill(billID: number) {
    const body = { billID: billID };
    return this.http.patch(`${environment.apiURL}user/paybill`, body);
  }
}
