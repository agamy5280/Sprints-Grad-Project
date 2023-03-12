import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UserAssetsService {
  constructor(private http: HttpClient) {}

  getAllUserAssets() {
    return this.http.get(`${environment.apiURL}user/assets`);
  }
  getUsersAssets() {
    return this.http.get(`${environment.apiURL}admin/assets`);
  }
  getUserDataFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem('userData') || '[]');
  }

  getData() {
    let data = JSON.stringify(this.getUserDataFromLocalStorage());
    return JSON.parse(data);
  }
  getUserData() {
    return this.getData().data;
  }
  user_accessToken() {
    return this.getData().access_token;
  }
  getIsAuthenticated(): boolean {
    return this.user_accessToken() != null;
  }

  addOtherAssetRequest(assetInfo: object) {
    return this.http.post(
      `${environment.apiURL}user/createasset?other=true`,
      assetInfo
    );
  }
  addRealEstateAssetRequest(assetInfo: object) {
    return this.http.post(
      `${environment.apiURL}user/createasset?realestate=true`,
      assetInfo
    );
  }
  addVehicleAssetRequest(assetInfo: object) {
    return this.http.post(
      `${environment.apiURL}user/createasset?vehicle=true`,
      assetInfo
    );
  }
  getUserAssets(id: string) {
    return this.http.get(`${environment.apiURL}user/assets/{id}`);
  }
  adminDocumentsConfirmation(assetId: number, status: string) {
    const body = { assetId: assetId, status: status };
    return this.http.patch(
      `${environment.apiURL}admin/assets/adminDocumentsConfirmation`,
      body
    );
  }
}
