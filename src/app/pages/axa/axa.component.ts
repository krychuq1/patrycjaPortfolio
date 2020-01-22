import { Component, OnInit } from '@angular/core';
import {SecretProjectsService} from '../../services/secret-projects.service';

@Component({
  selector: 'app-axa',
  templateUrl: './axa.component.html',
  styleUrls: ['./axa.component.scss']
})
export class AxaComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  content: any;
  images: string[];
  routers: string[];
  serverLoading = true;
  constructor(private secretProjectsService: SecretProjectsService) { }

  ngOnInit() {
    this.secretProjectsService.getContent('2').then(res => {
      this.content = res.content;
      this.images = res.images;
      this.serverLoading = false;
      // this.routers = res.routers;
    }, error => {
      // todo handle this
      console.log(error);
    });
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
