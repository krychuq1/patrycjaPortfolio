import { Component } from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {SortingService} from '../../services/sorting.service';
import {ContentService} from '../../services/content.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  filter: string;
  contentUrl: string;
  content: object;
  constructor(private languageService: LanguageService,
              private sortingService: SortingService, private contentService: ContentService) {
    this.filter = 'any';
    this.contentUrl = 'component/projects/';
    this.getContent();

    this.languageService.changeLanguage.subscribe(() => {
      this.getContent();
    });
    this.sortingService.sortingEven.subscribe((val) => {
      this.filter = val;
    });
  }
  receiveMessage($event) {
    this.filter = $event;
  }
  public setLanguage(lan: string) {
    this.languageService.setLanguage(lan);
    // this.getContent();
  }
  getContent() {
    this.contentService.getContent(this.contentUrl).then((content) => {
      this.content = content;
    }, err => {
      console.error(err);
    });
  }
}
