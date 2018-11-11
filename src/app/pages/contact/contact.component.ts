import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

import {Component} from '@angular/core';
@Component({
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contentUrl: string;
  content: object;
  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'page/contact/';
    this.getContent();
    this.languageService.changeLanguage.subscribe(() => {
      this.getContent();
    });
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
