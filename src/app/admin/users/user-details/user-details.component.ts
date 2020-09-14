import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/shared/admin-model/user-model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: UserModel;
  constructor() { }

  ngOnInit(): void {
  }

}
