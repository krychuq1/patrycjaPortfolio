import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ContentService} from './services/content.service';
import {LanguageService} from './services/language.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgLoading: boolean;
  contentLoading: boolean;
  imgToLoad: number;
  imgCounter: number;
  headerContentUrl: string;
  projectsContentUrl: string;
  headerContent: object;
  projectsContent: object;
  constructor(public router: Router, private contentService: ContentService, private languageService: LanguageService,
              private translate: TranslateService) {
    this.imgLoading = true;
    this.contentLoading = true;
    this.imgCounter = 12;
    this.imgToLoad = 0;
    this.headerContentUrl = 'component/header/';
    this.projectsContentUrl = 'component/projects/';
    localStorage.setItem('lan', 'en');
    translate.setDefaultLang('en')
    // pre load all of the content
    this.preloadContent();
    // listen for language change
    this.languageService.changeLanguage.subscribe(() => {
      this.preloadContent();
    });
  }
  preloadContent() {
    const headerPromise = this.contentService.getContent(this.headerContentUrl);
    const projectPromise = this.contentService.getContent(this.projectsContentUrl);
    Promise.all([headerPromise, projectPromise]).then((content) => {
      this.headerContent = content[0];
      this.projectsContent = content[1];
      // console.log(this.projectsContent);
        this.contentLoading = false;
    });
  }
  imgLoaded() {
    this.imgToLoad ++;
    if(this.imgCounter === this.imgToLoad) {
      this.imgLoading = false;
    }
  }
}
