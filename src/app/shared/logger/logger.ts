import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  public debugEnabled;

  constructor() {
    this.debugEnabled = true;
  }

  public info(message: string, data?: any) {
    // tslint:disable-next-line
    console.info(`Info: ${message}`, data);
  }

  public error(message: string, data?: any) {
    // tslint:disable-next-line
    console.error(`Error: ${message}`, data);
  }

  public success(message: string, data?: any) {
    // tslint:disable-next-line
    console.info(`Success: ${message}`, data);
  }

  public warning(message: string, data?: any) {
    // tslint:disable-next-line
    console.warn(`Warning: ${message}`, data);
  }
}
