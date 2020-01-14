import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arla',
  templateUrl: './arla.component.html',
  styleUrls: ['./arla.component.scss']
})
export class ArlaComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    if (this.numberOfImage === 10) {
      this.loading = false;
      setTimeout(() => {
        this.animate = true;
      }, 100);
    }
  }
  scrollToTop(): void {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
