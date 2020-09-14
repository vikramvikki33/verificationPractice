import { UserModel } from 'src/app/shared/admin-model/user-model';
import { EventEmitter } from '@angular/core';

export class UserService {
  userSelected = new EventEmitter<UserModel>();
  private users: UserModel[] = [];

  getUsers() {
    this.buildUsers();
    return this.users.slice();
  }

  private buildUsers() {
    let user = new UserModel();
    user.firstName = 'Vikram';
    user.lastName = 'Ravichandran',
    user.userId = 'vikramvikki33';
    user.status = true;
    user.dateOfBirth = new Date(1991, 6, 6);
    this.users.push(user);
    user = new UserModel();
    user.firstName = 'Ranjitha';
    user.lastName = 'PuttaSwamy',
    user.userId = 'ranjitha.p';
    user.status = true;
    user.dateOfBirth = new Date(1995, 6, 6);
    this.users.push(user);
  }
}
