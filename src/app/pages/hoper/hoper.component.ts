import { Component, OnInit } from '@angular/core';
import {SecretProjectsService} from '../../services/secret-projects.service';

@Component({
  selector: 'app-hoper',
  templateUrl: './hoper.component.html',
  styleUrls: ['./hoper.component.scss']
})
export class HoperComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  content: any;
  serverLoading = true;
  images: string[];
  constructor(private secretProjectsService: SecretProjectsService) { }


  ngOnInit() {
    this.secretProjectsService.getContent('5').then(res => {
      this.content = res.content;
      this.images = res.images;
      this.serverLoading = false;
    }, error => {
      // todo handle this
      console.log(error);
    });
  }

  imgLoaded() {
    this.numberOfImage++;
    console.log('here ', this.loading, this.numberOfImage);

    if (this.numberOfImage === 6) {
      this.loading = false;
      setTimeout(() => {
        this.animate = true;
      }, 100);
    }
  }

  scrollToTop(): void {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }
}
