import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: boolean;
  imgToLoad: number;
  imgCounter: number;
  constructor(public router: Router) {
    localStorage.setItem('lan', 'pl');
    this.isLoading = true;
    this.imgCounter = 16;
    this.imgToLoad = 0;

  }
  imgLoaded() {
    this.imgToLoad ++;
    if(this.imgCounter === this.imgToLoad) {
      this.isLoading = false;
    }
  }
}
