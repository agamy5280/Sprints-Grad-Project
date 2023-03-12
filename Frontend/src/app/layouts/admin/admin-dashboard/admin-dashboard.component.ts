import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { HelperService } from '../../../services/helper.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{

  users: User[] = [];
  usersCount:number=0;
  billsCount:number=0;
  assetsCount:number=0;
  transCount:number=0;

  constructor(public userService: UserService, private helperService:HelperService) {}
  ngOnInit(): void {
    this.getAllUsers();
    this.getDBdetails();
  }



  
  async getDBdetails() {
    (await this.helperService.getCountsRequest()).subscribe({
      next: (res: any) => (
         this.usersCount = res['usersCount'],
         this.billsCount = res['billsCount'],
         this.assetsCount = res['assetsCount'],
         this.transCount = res['transCount']
        ),
      error: (err: any) => {},
      complete: () => {},
    });
  }






  async getAllUsers() {
    (await this.userService.getUsers()).subscribe({
      next: (res: any) => (this.users = res['users']),
      error: (err: any) => {},
      complete: () => {},
    });
  }





}
