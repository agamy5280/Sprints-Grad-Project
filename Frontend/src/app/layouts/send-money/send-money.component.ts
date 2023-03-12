import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { TransferMoneyService } from '../../services/transfer-money.service';
@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  users: User[] = [];
  otherUser: string[] = [];

  userEmail:string='';
  constructor(
    public transferMoneyService: TransferMoneyService,
    private _router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  public sendMoneyForm = new FormGroup({
    receiverEmail: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
 
  });

 



  async sendBill() {
    (await this.transferMoneyService.sendMoneyRequest(this.sendMoneyForm.value)).subscribe({
      next: (res: any) => res,
      error: (err: any) => {
        alert("You don't have sufficient money to complete this transaction!")
      },
      complete: () => {
        alert('Transaction Complete!'),
          this._router.navigate(['balance']);
      },
    });
  }



  async getAllUsers() {

    (await this.userService.getUserEmails()).subscribe({

    

      next: (res: any) => {
        this.users = res['users'];
         this.users.forEach(user => {
           if (this.userService.getUserData().email!=user.email ){
            let email=user.email;
             this.otherUser.push(email)
           }
         })
     
    },
      error: (err: any) => {},
      complete: () => {},
    });



  }


}
