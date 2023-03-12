import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-mybills',
  templateUrl: './mybills.component.html',
  styleUrls: ['./mybills.component.scss']
})
export class MybillsComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('userData') || '{}');
  userID = this.userData.data.id;
  bills: any;
  constructor(private billService: BillService, private _router: Router) {}

  async ngOnInit() {
    (await this.billService.getBills(this.userID)).subscribe({
      next: (res) => {this.bills = res, console.log(this.bills)},
      error: (err) => {console.log(err)}
    })
  }
  async payBill(billID: number) {
    (await this.billService.payBill(billID)).subscribe({
      next: (res:any) => {
        alert(res.message)
        this._router.navigate(['myBills']).then(() => {
          window.location.reload()
        });
      },
      error: (err) => {alert(err.message)}
    })
  }
}
