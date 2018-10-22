import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LanguageService {
  public changeLanguage: EventEmitter<string> = new EventEmitter();

  constructor() {
  }
  public setLanguage(lan: string) {
    localStorage.setItem('lan', lan);
    this.changeLanguage.next('lan');
  }
}
