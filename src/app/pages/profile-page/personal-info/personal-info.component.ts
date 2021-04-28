import { Component, OnInit } from '@angular/core';
import {Client} from '../../../my-objects/client';
import {ClientService} from '../../../services/client.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  client: Client;

  constructor(
    private clientService: ClientService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientService.getClient(this.authService.getUserId()).subscribe(res => {
      this.client = res;
    });
  }

}
