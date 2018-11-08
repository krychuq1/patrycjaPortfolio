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
  projectName: string;
  key: string;
  constructor(private languageService: LanguageService,
              private contentService: ContentService,
              private activatedRoute: ActivatedRoute) {
    this.contentUrl = 'page/single-project/';
    this.getContent();
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
    }, err => {
      console.error(err);
    });
  }


}
