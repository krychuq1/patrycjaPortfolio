import {Component, Input} from '@angular/core';
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
  local: any;

  @Input() content;

  constructor(private languageService: LanguageService,
              private sortingService: SortingService, private contentService: ContentService) {
    this.filter = 'any';
    this.local = localStorage;

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
}
