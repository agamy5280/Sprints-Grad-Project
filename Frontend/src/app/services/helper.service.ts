import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HelperService {


  constructor(private http: HttpClient) {}
    
  
  getCountsRequest() {
  
    return this.http.get(`${environment.apiURL}admin/dashboard` );
  
     }
  
}
