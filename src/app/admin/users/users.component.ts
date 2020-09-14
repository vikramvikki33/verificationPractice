import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/admin-model/user-model';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  userSelected: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSelected.subscribe(
      (user: UserModel) => {
        this.userSelected = user;
      }
    );
  }

}
