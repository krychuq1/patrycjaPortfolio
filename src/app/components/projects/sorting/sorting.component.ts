import {Component, EventEmitter, Output} from '@angular/core';
import {LanguageService} from '../../../services/language.service';
import {ContentService} from '../../../services/content.service';
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.html',
  styleUrls: ['./sorting.scss']
})
export class SortingComponent {
  contentUrl: string;
  content: object;

  constructor(private languageService: LanguageService, private contentService: ContentService) {
    this.contentUrl = 'component/sorting/';
    this.getContent();
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
}
