import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class HeaderService {
  public homeRoute: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }
  public goHome() {
    this.homeRoute.next(true);
  }
}
