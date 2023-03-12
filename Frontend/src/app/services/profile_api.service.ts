import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from 'src/app/services/user.service';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {


    
  constructor(private http: HttpClient, user:UserService) {

   }


     // Update Profile information

  async updateProfileRequest(userInfo: object,id:string) {

  
  
  return this.http.patch(`${environment.apiURL}user/profile/update/${id}`, userInfo );
   }
 
   

  // Change Password
   async changeProfilePasswordRequest(userInfo: object,id:string) {

 
    return this.http.patch(`${environment.apiURL}user/profile/changePassword/${id}`, userInfo );
   }
 


   async deleteAccountRequest(userInfo: object,id:string) {

   const data = {
    body: JSON.stringify(userInfo)
 };

  return this.http.delete(`${environment.apiURL}user/profile/deleteAccount/${id}`, data );

   }



   
   getUserRequest(id:string) {
   
  return this.http.get(`${environment.apiURL}user/profile/show/${id}` );

   }

}
