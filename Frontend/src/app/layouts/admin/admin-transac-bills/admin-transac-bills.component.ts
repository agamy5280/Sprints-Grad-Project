import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-admin-transac-bills',
  templateUrl: './admin-transac-bills.component.html',
  styleUrls: ['./admin-transac-bills.component.scss']
})
export class AdminTransacBillsComponent {

  data :any []=[];

  constructor(private transService: TransactionService) {}

  ngOnInit() {
   this.transService.getTransBillsRequest().subscribe((res: any) => {
    console.log(this.data = res);
  });  
  
  }
}
