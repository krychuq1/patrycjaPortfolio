import { Component } from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {SortingService} from '../../services/sorting.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  filter: string;
  constructor(private languageService: LanguageService, private sortingService: SortingService) {
    this.filter = 'any';
    // this.languageService.changeLanguage.subscribe(() => {
    //   this.getContent();
    // });
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
