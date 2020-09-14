import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { ClientsListComponent } from './admin/clients/clients-list/clients-list.component';
import { ClientItemComponent } from './admin/clients/clients-list/client-item/client-item.component';
import { ClientDetailsComponent } from './admin/clients/client-details/client-details.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { UsersComponent } from './admin/users/users.component';
import { UsersListComponent } from './admin/users/users-list/users-list.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { UserService } from './admin/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientItemComponent,
    ClientDetailsComponent,
    MainNavComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
