import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

import {Component, OnInit} from '@angular/core';
@Component({
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit{
  contentUrl: string;
  content: object;
  local: any;
  animate = false;
  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'page/contact/';
    this.local = localStorage;
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

  ngOnInit(): void {
    setTimeout(()=>{
      this.animate = true;
    }, 100);
  }
}
