import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imaread',
  templateUrl: './imaread.component.html',
  styleUrls: ['./imaread.component.scss']
})
export class ImareadComponent implements OnInit {
  animate = false;
  numberOfImage = 0;
  loading = true;

  constructor() { }
  imgLoaded() {
    this.numberOfImage ++;
    if (this.numberOfImage === 14) {
      this.loading = false;
      setTimeout(() => {
        this.animate = true;
      }, 100);
    }
  }
  ngOnInit() {
  }
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
