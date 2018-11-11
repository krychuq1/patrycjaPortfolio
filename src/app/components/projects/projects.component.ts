import { Component } from '@angular/core';
import {LanguageService} from '../../services/language.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  filter: string;
  constructor(private languageService: LanguageService) {
    this.filter = 'any';
    // this.languageService.changeLanguage.subscribe(() => {
    //   this.getContent();
    // });
  }
  receiveMessage($event) {
    this.filter = $event;
  }
  public setLanguage(lan: string) {
    // console.log('setting language')
    this.languageService.setLanguage(lan);
    // this.getContent();
  }
}
