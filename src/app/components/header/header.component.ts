import {Component, HostListener, Inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  contentUrl: string;
  content: object;
  navBurger: boolean;
  isMobile: boolean;
  constructor(private languageService: LanguageService,
              private contentService: ContentService, public router: Router,
  @Inject(DOCUMENT) private document: Document, private headerService: HeaderService) {
    this.contentUrl = 'component/header/';
    this.navBurger = false;
    this.getContent();
    this._checkDevice();
    this.languageService.changeLanguage.subscribe(() => {
      this.getContent();
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?): void {
    this._checkDevice();
  }
  private _checkDevice() {
    const innerWidth = (window.innerWidth /
      parseFloat(getComputedStyle(document.querySelector('body'))['font-size']));
    this.navBurger = (innerWidth >= 64);
    this.isMobile = (innerWidth < 64);
    console.log('here, ', this.navBurger);
  }
  public setLanguage(lan: string) {
    console.log('setting language')
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
  public openBurger() {
    if(this.isMobile){
      console.log('burger open');
      this.navBurger = !this.navBurger;
      if(this.navBurger){
        this.document.body.style.maxHeight = '100vh';
        this.document.body.style.overflow = 'hidden';
      } else {
        this.document.body.style.maxHeight = '100%';
        this.document.body.style.overflow = 'visible';

      }
    }

  }
  public goHome(): void {
    this.headerService.goHome();
  }
  public goTo(link: string): void {
    const win = window.open(link, '_blank');
    win.focus();
  }
}
