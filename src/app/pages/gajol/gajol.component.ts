import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gajol',
  templateUrl: './gajol.component.html',
  styleUrls: ['./gajol.component.scss']
})
export class GajolComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    console.log('here ', this.loading, this.numberOfImage);

    if (this.numberOfImage === 10) {
      this.loading = false;
      console.log('here ', this.loading);

    }
  }
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
