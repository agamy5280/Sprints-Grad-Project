import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-admin-transac-money',
  templateUrl: './admin-transac-money.component.html',
  styleUrls: ['./admin-transac-money.component.scss']
})
export class AdminTransacMoneyComponent {
  data :any []=[];

  constructor(private transService: TransactionService) {}

  ngOnInit() {
   this.transService.getTransMoneyRequest().subscribe((res: any) => {
    console.log(this.data = res);
  });  
  
  }
}
