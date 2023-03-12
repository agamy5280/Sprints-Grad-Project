import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from 'src/app/services/profile_api.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-balancepage',
  templateUrl: './balancepage.component.html',
  styleUrls: ['./balancepage.component.scss']
})
export class BalancepageComponent {
   user: User = {} as User;
   cards: Card[] = [];
   userId=""

   constructor(private profileService:ProfileService,private userService: UserService,private cardService:CardService,private _router: Router){

  }
  
  

  ngOnInit(): void {
    this.userId=this.userService.getUserID();    
    this.getUser();
    this.getCards();  

  }

 

  async getCards() {
    (await this.cardService.getCardsRequest(this.userId)).subscribe({
      next: (res:any) => this.cards=res["cards"],
      error: (err:any) =>  {},
      complete: () => {}

    })  
  }


  async getUser() {
    (await this.profileService.getUserRequest(this.userId)).subscribe({
      next: (res:any) => this.user=res["user"],
      error: (err:any) =>  {},
      complete: () => {}

    })  
  }

}
