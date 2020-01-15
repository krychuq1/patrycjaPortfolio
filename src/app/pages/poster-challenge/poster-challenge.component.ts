import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster-challenge',
  templateUrl: './poster-challenge.component.html',
  styleUrls: ['./poster-challenge.component.scss']
})
export class PosterChallengeComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    if (this.numberOfImage === 1) {
      this.loading = false;
      setTimeout(() => {
        this.animate = true;
      }, 100);
    }
  }
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
