import { Component, OnInit } from '@angular/core';
import {Client} from '../../../my-objects/client';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  client: Client;
  clientLogin = 'romakz@gmail.com';

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.client = this.getClient(this.clientLogin);
  }

  getClient(login: string): Client {
    return this.clientService.getClient(login);
  }

}
