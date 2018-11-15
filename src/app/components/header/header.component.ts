import {Component, HostListener, Inject, Input} from '@angular/core';
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
  navBurger: boolean;
  isMobile: boolean;
  local: any;
  @Input() content;
  constructor(private languageService: LanguageService,
              private contentService: ContentService, public router: Router,
  @Inject(DOCUMENT) private document: Document, private headerService: HeaderService) {
    this.navBurger = false;
    this._checkDevice();
    this.local = localStorage;

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
  }
  public setLanguage(lan: string) {
    this.languageService.setLanguage(lan);
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
