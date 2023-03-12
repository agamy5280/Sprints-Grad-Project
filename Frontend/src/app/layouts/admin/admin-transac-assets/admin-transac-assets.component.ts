import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-admin-transac-assets',
  templateUrl: './admin-transac-assets.component.html',
  styleUrls: ['./admin-transac-assets.component.scss']
})
export class AdminTransacAssetsComponent implements OnInit {
  data :any []=[];

  constructor(private transService: TransactionService) {}

  ngOnInit() {
   this.transService.getTransAssetsRequest().subscribe((res: any) => {
    console.log(this.data = res);
  });  
  
  }
}
