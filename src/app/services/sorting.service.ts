import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SortingService {
  public sortingEven: EventEmitter<string> = new EventEmitter();

  constructor() {
  }
  public changeSorting(filter: string) {
    this.sortingEven.next(filter);
  }
}
