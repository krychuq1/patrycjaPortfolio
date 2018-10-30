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
  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'page/about/';
    this.getContent();
  }
  public setLanguage(lan: string) {
    this.languageService.setLanguage(lan);
    this.getContent();
  }
  getContent() {
    this.contentService.getContent(this.contentUrl).then((content) => {
      this.content = content;
    }, err => {
      console.error(err);
    });
  }
}
