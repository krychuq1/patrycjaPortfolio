import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imaread',
  templateUrl: './imaread.component.html',
  styleUrls: ['./imaread.component.scss']
})
export class ImareadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
