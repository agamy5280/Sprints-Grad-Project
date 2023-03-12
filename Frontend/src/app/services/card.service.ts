import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from 'src/app/services/user.service';



@Injectable({
  providedIn: 'root'
})
export class CardService {
  // user:UserService=new UserService;

  constructor(private http: HttpClient) {

  }





  async addCardRequest(userInfo: object,id:string) {

 
  return this.http.post(`${environment.apiURL}user/addcard/?id=${id}`, userInfo );

   }
 

  getCardsRequest(id:string) {
  
  return this.http.get(`${environment.apiURL}user/cards/${id}` );

   }


   
   
}
