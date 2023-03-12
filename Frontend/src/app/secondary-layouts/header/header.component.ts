import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  bills: Bill[] = [];
  newBills: Bill[] = [];
  userId: string = '';
  userData = JSON.parse(localStorage.getItem('userData') || '{}');
  constructor(
    public userService: UserService,
    private billService: BillService,
    private authService: AuthServiceService,
    public router: Router
  ) {}
  ngOnInit() {
    this.userId = this.userService.getUserID();
    this.getBills();
    //console.log(this.bills);
  }
  async getBills() {
    (await this.billService.getBills(this.userId)).subscribe({
      next: (res: any) => {
        this.bills = res;
        for (let i = 0; i < res.length; i++) {
          if (res[i]['status'] === 'unpaid') {
            this.newBills.push(res[i]);
          }
        }
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
  //user
  signOut() {
    this.authService.logout();
    //this.userService.signOut();
  }
}
