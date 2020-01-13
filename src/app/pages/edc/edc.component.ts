import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edc',
  templateUrl: './edc.component.html',
  styleUrls: ['./edc.component.scss']
})
export class EdcComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    if (this.numberOfImage === 23) {
      this.loading = false;

    }
  }
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
