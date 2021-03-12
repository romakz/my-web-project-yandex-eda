import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  doLog(message: string) {
    console.log(message);
  }

  doLogWittObject(message: string, obj: object) {
    console.log(message);
    console.log(obj);
  }
}
