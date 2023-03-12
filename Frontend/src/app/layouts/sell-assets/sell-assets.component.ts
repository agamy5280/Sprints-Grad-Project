import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssetsOther } from 'src/app/interfaces/assets-other';
import { User } from 'src/app/interfaces/user';
import { Transaction } from 'src/app/interfaces/transaction';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sell-assets',
  templateUrl: './sell-assets.component.html',
  styleUrls: ['./sell-assets.component.scss'],
})
export class SellAssetsComponent implements OnInit {
  assetsOthers: AssetsOther[] = [];
  users: User[] = [];
  transactions: Transaction[] = [];
  userId: string = '';
  assetId: string = '';
  //transactionId: string = '';
  constructor(
    private assetService: UserAssetsService,
    private userService: UserService,
    private transaction: TransactionService
  ) {}

  ngOnInit(): void {
    this.allUserAssets();
  }

  public sellAssetForm = new FormGroup({
    assetType: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    assetID: new FormControl('', Validators.required),
    buyerEmail: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });
  getTransactionDetails() {
    return {
      assetType: this.sellAssetForm.value.assetType,
      description: this.sellAssetForm.value.description,
      assetID: this.sellAssetForm.value.assetID,
      buyerEmail: this.sellAssetForm.value.buyerEmail,
      amount: this.sellAssetForm.value.amount,
    };
  }

  async sendAsset() {
    (
      await this.transaction.sendTransaction(this.getTransactionDetails())
    ).subscribe({
      next: (res: any) => console.log((this.transaction = res)),
      error: (err: any) => {},
      complete: () => {},
    });
  }

  async allUserAssets() {
    (await this.assetService.getAllUserAssets()).subscribe({
      next: (res: any) => console.log((this.assetsOthers = res['Other'])),
      error: (err: any) => {},
      complete: () => {},
    });
  }
}
//
