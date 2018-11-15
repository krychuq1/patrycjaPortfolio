import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  templateUrl: './project-single.html',
  styleUrls: ['./project-single.scss']
})
export class ProjectSingleComponent implements OnInit {
  contentUrl: string;
  content: object;
  imgLoading: boolean;
  contentLoading: boolean;
  key: string;
  local: any;

  constructor(private languageService: LanguageService,
              private contentService: ContentService,
              private activatedRoute: ActivatedRoute) {
    this.imgLoading = true;
    this.contentLoading = true;
    this.local = localStorage;

    this.contentUrl = 'page/single-project/';
    this.getContent();
    this.languageService.changeLanguage.subscribe(() => {
      this.getContent();
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.key = params.name;

    });
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
  scrollToTop(): void{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
  imgLoaded() {
      this.imgLoading = false;
  }

}
