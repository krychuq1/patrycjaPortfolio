import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;

  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    if (this.numberOfImage === 16) {
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
