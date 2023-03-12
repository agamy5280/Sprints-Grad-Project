import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  users: User[] = [];

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  async getAllUsers() {
    (await this.userService.getUsers()).subscribe({
      next: (res: any) => (this.users = res['users']),
      error: (err: any) => {},
      complete: () => {},
    });
  }
}
