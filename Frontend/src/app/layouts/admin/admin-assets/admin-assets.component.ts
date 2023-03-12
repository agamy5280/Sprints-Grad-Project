import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/interfaces/status';
import { UserAseets } from 'src/app/interfaces/user-aseets';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';
@Component({
  selector: 'app-admin-assets',
  templateUrl: './admin-assets.component.html',
  styleUrls: ['./admin-assets.component.scss']
})
export class AdminAssetsComponent {
 
  userAssets: UserAseets[] = [];

  constructor(private service: UserAssetsService, private _router: Router) {}


  
  ngOnInit() {
    this.getUserAssets();
  }

  getUserAssets() {
    this.service.getUsersAssets().subscribe((res: any) => {
       this.userAssets =res['userAssets']
    });
  }
}
