import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stp',
  templateUrl: './stp.component.html',
  styleUrls: ['./stp.component.scss']
})
export class StpComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    if (this.numberOfImage === 5) {
      this.loading = false;
    }
  }
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
