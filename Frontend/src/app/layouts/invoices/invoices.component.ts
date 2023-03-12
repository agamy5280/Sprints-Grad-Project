import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/interfaces/transaction';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  transactions: Transaction[] = [];
  status: string = '';
  assetID: string = '';
  constructor(private transaction: TransactionService, private _router: Router) {}

  ngOnInit(): void {
    this.showInvoiceToBuyer();
    //this.acceptAsset();
  }

  async showInvoiceToBuyer() {
    (await this.transaction.showInvoices()).subscribe({
      next: (res: any) =>{ 
      this.transactions = res['userTransactions']
      console.log(this.transactions);
    }
    });
  }
  async acceptAsset(status: string) {
    console.log(status);
      (await this.transaction.acceptAsset(status)).subscribe({
        next: (res: any) => {
          alert(res.message)
        },
        error: (err) => {
          alert(err.message)
        },
        complete: () => {
          window.location.reload();
        }
      })
  }
}
