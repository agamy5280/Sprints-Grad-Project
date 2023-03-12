import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  name = 'MoneyWall';
  constructor(public userService: UserService) {}
}
