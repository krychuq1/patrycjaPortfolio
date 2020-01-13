import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

import {Component, OnInit} from '@angular/core';
@Component({
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit{
  contentUrl: string;
  content: object;
  imgLoading: boolean;
  local: any;
  animate = false;

  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'page/about/';
    this.local = localStorage;
    this.imgLoading = true;
  }
  imgLoaded() {
    this.imgLoading = false;
    setTimeout(() => {
      this.animate = true;
    }, 300);
  }

  ngOnInit(): void {

  }
}
