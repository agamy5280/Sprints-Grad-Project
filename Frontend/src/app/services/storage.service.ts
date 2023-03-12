import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  getUserDataFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem('userData') || '[]');
  }
  // getBillDataFromLocalStorage(): any {
  //   return JSON.parse(localStorage.getItem('billData') || '[]');
  // }
}
