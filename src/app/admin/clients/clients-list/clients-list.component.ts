import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/shared/admin-model/client-model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: ClientModel[] = [];
  constructor() {
    this.buildClientList();
   }

  ngOnInit(): void {
  }

  buildClientList() {
    let client = new ClientModel();
    client.clientId = 123;
    client.clientName = 'Accenture';
    client.clientLocation = 'Bangalore';
    client.status = false;
    this.clients.push(client);

    client = new ClientModel();
    client.clientId = 123;
    client.clientName = 'Jio Reliance India';
    client.clientLocation = 'Bangalore';
    client.status = true;
    this.clients.push(client);
  }

}
