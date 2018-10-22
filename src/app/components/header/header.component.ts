import { Component } from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  contentUrl: string;
  content: object;
  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'component/header/';
  }
  public setLanguage(lan: string) {
    console.log(this.languageService);
    this.languageService.setLanguage(lan);
    this.getContent();
  }
  getContent() {
    this.contentService.getContent(this.contentUrl).then((content) =>{
      this.content = content;
    }, err => {
      console.error(err);
    });
  }
}
