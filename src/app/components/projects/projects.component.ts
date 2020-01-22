import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {SortingService} from '../../services/sorting.service';
import {ContentService} from '../../services/content.service';
import {SecretProjectsService} from '../../services/secret-projects.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit{
  filter: string;
  local: any;
  animate = false;
  @Output() secretEmitter = new EventEmitter<boolean>();
  @Output() loadingEmitter = new EventEmitter<boolean>();

  @Input() content;

  constructor(private languageService: LanguageService, public secretProjectsService: SecretProjectsService,
              private sortingService: SortingService, private router: Router) {
    this.filter = 'any';
    this.local = localStorage;
    this.sortingService.sortingEven.subscribe((val) => {
      this.filter = val;
    });
  }
  receiveMessage($event) {
    this.filter = $event;
  }
  secretProjects() {
    this.secretProjectsService.validateToken().then(res => {
      this.router.navigate(['/secretProjects']);
    }, error => {

    });
  }

  public setLanguage(lan: string) {
    this.languageService.setLanguage(lan);
    // this.getContent();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 300);
  }
}
