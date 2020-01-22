import { Component, OnInit } from '@angular/core';
import {SecretProjectsService} from '../../services/secret-projects.service';

@Component({
  selector: 'app-andea',
  templateUrl: './andea.component.html',
  styleUrls: ['./andea.component.scss']
})
export class AndeaComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  images: string[];
  content: any;
  serverLoading = true;
  constructor(private secretProjectsService: SecretProjectsService) { }

  ngOnInit() {
    this.secretProjectsService.getContent('3').then(res => {
      this.content = res.content;
      this.images = res.images;
      this.serverLoading = false;
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
