import { Component } from '@angular/core';
import { AssetsOther } from 'src/app/interfaces/assets-other';
import { AssetsRealEstate } from 'src/app/interfaces/assets-real-estate';
import { AssetsVehicles } from 'src/app/interfaces/assets-vehicles';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent {
  assetsOthers: AssetsOther[] = [];
  assetsRealEstate: AssetsRealEstate[] = [];
  assetsVehicles: AssetsVehicles[] = [];
  constructor(private service: UserAssetsService) {}

  ngOnInit() {
    this.getUserAssets();
  }

  getUserAssets() {
    this.service.getAllUserAssets().subscribe((userAssets: any) => {
      for (let i = 0; i < userAssets['Other'].length; i++) {
        this.assetsOthers.push(userAssets['Other'][i]);
      }
      for (let i = 0; i < userAssets['Real-Estates'].length; i++) {
        this.assetsRealEstate.push(userAssets['Real-Estates'][i]);
      }
      for (let i = 0; i < userAssets['Vehicles'].length; i++) {
        this.assetsVehicles.push(userAssets['Vehicles'][i]);
      }
    });
  }
}
