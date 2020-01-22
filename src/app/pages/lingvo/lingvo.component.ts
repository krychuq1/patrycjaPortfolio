import { Component, OnInit } from '@angular/core';
import {SecretProjectsService} from '../../services/secret-projects.service';

@Component({
  selector: 'app-lingvo',
  templateUrl: './lingvo.component.html',
  styleUrls: ['./lingvo.scss']
})
export class LingvoComponent implements OnInit {
  numberOfImage = 0;
  loading = true;
  animate = false;
  content: any;
  serverLoading = true;
  images: string[];

  constructor(private secretProjectsService: SecretProjectsService) { }

  ngOnInit() {
    this.secretProjectsService.getContent('6').then(res => {
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

    if (this.numberOfImage === 9) {
      this.loading = false;
      setTimeout(() => {
        this.animate = true;
      }, 100);
    }
  }
}
