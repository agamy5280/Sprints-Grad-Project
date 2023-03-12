import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/interfaces/status';
import { UserAseets } from 'src/app/interfaces/user-aseets';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';

@Component({
  selector: 'app-assets-requests',
  templateUrl: './assets-requests.component.html',
  styleUrls: ['./assets-requests.component.scss'],
})
export class AssetsRequestsComponent {
  userAssets: UserAseets[] = [];
  constructor(private service: UserAssetsService, private _router: Router) {}

  ngOnInit() {
    this.getUserAssets();
  }

  getUserAssets() {
    this.service.getUsersAssets().subscribe((userAssets: any) => {
      for (let i = 0; i < userAssets['userAssets'].length; i++) {
        if (userAssets['userAssets'][i]['status'] === 'pending') {
          this.userAssets.push(userAssets['userAssets'][i]);
        }
      }
    });
  }
  rejectAsset(assetId: number) {
    let status = 'rejected';

    this.service.adminDocumentsConfirmation(assetId, status).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('error'),
      complete: () => {
        alert('Your request has been sent Successfully!');
        this._router.navigate(['/admin/AseetsRequests']).then(() => {
          window.location.reload();
        });
      },
    });
  }
  approveAsset(assetId: number) {
    let status = 'approved';
    this.service.adminDocumentsConfirmation(assetId, status).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('error'),
      complete: () => {
        alert('Your request has been sent Successfully!');
        this._router.navigate(['/admin/AseetsRequests']).then(() => {
          window.location.reload();
        });
      },
    });
  }
}
