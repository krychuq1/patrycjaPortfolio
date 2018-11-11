import {Component, EventEmitter, Output} from '@angular/core';
import {LanguageService} from '../../../services/language.service';
import {ContentService} from '../../../services/content.service';
import {HeaderService} from '../../../services/header.service';
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.html',
  styleUrls: ['./sorting.scss']
})
export class SortingComponent {
  contentUrl: string;
  content: object;
  showSorting: boolean;

  constructor(private languageService: LanguageService, private contentService: ContentService, private headerService: HeaderService) {
    this.contentUrl = 'component/sorting/';
    this.showSorting = false;
    this.getContent();
    this.languageService.changeLanguage.subscribe(() => {
      this.getContent();
    });

    this.headerService.homeRoute.subscribe(() => {
      this.showSorting = false;
    });
  }
  @Output() filterEvent = new EventEmitter<string>();

  getContent() {
    this.contentService.getContent(this.contentUrl).then((content) => {
      this.content = content;
    }, err => {
      console.error(err);
    });
  }
  sendFilter(filter: string) {
    this.filterEvent.emit(filter);
  }
  changeSorting(): void {
    this.showSorting = !this.showSorting;
  }
}
