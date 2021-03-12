import { Injectable } from '@angular/core';
import {Client} from '../my-objects/client';
import {LoggerService} from './logger.service';

@Injectable()
export class ClientService {
  clients: Client[] = [];

  constructor(
    private loggerService: LoggerService
  ) {
    this.initClients();
  }

  initClients() {
    this.clients.push(
      new Client(
        'romakz@gmail.com',
        '123',
        'Ramazan',
        'Alimzhan',
        'assets/images/logos/account-profile.webp',
        '+ 7-707-777-77-77'
      ));

    this.loggerService.doLog('Init client romakz@gmail.com.');
  }

  getClient(login: string): Client {
    let result: Client = null;

    for (let client of this.clients) {
      if (client.login === login) {
        result = client;
        break;
      }
    }

    this.loggerService.doLog('get client by login=' + login);
    return result;
  }
}
