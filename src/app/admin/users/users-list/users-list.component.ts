import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../../shared/admin-model/user-model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onUserSelect(user: UserModel) {
   this.userService.userSelected.emit(user);
  }


}
