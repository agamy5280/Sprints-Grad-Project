import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-admin-bills',
  templateUrl: './admin-bills.component.html',
  styleUrls: ['./admin-bills.component.scss']
})
export class AdminBillsComponent implements OnInit {
   bills :Bill []=[];
  // bills :Bill ={} as Bill;

    
  constructor(private billService: BillService) {

  }

  ngOnInit() {

    
   this.billService.getAllBills().subscribe((res: any) => {
    console.log(this.bills = res);
  });  
  
  }
 

}
