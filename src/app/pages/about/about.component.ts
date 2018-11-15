import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

import {Component} from '@angular/core';
@Component({
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  contentUrl: string;
  content: object;
  imgLoading: boolean;
  contentLoading: boolean;
  local: any;

  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'page/about/';
    this.local = localStorage;

    this.getContent();
    this.languageService.changeLanguage.subscribe(() => {
      this.getContent();
    });
    this.imgLoading = true;
    this.contentLoading = true;
  }
  public setLanguage(lan: string) {
    this.languageService.setLanguage(lan);
    this.getContent();
  }
  getContent() {
    this.contentService.getContent(this.contentUrl).then((content) => {
      this.content = content;
      this.contentLoading = false;

    }, err => {
      console.error(err);
    });
  }
  imgLoaded() {
    this.imgLoading = false;
  }
}
