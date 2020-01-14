import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andea',
  templateUrl: './andea.component.html',
  styleUrls: ['./andea.component.scss']
})
export class AndeaComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  constructor() { }

  ngOnInit() {
  }
  imgLoaded() {
    this.numberOfImage ++;
    console.log('here ', this.loading, this.numberOfImage);

    if (this.numberOfImage === 15) {
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
