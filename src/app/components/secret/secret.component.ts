import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SecretProjectsService} from '../../services/secret-projects.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SecretComponent implements OnInit {
  content: any;
  images: string[];
  routers: string[];
  loading = true;
  numberOfImage = 0;
  animate = false;
  serverLoading = true;
  constructor(private secretProjectsService: SecretProjectsService) { }
  imgLoaded() {
    this.numberOfImage ++;
    console.log('here ', this.loading, this.numberOfImage);

    if (this.numberOfImage === 5) {
      this.loading = false;
      setTimeout(() => {
        this.animate = true;
      }, 100);
    }
  }
  ngOnInit() {
    this.secretProjectsService.getContent('secret-projects').then(res => {
      this.content = res.content;
      this.images = res.images;
      this.routers = res.routers;
      this.serverLoading = false;
      // this.htmlSecret = res.html;
    }, error => {
      // todo handle this
      console.log(error);
    });
  }

}
