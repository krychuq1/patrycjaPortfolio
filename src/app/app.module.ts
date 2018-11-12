import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LanguageService} from './services/language.service';
import {ContentService} from './services/content.service';
import {HttpClientModule} from '@angular/common/http';
import {ProjectsComponent} from './components/projects/projects.component';
import {SortingComponent} from './components/projects/sorting/sorting.component';
import {AboutComponent} from './pages/about/about.component';
import {routes} from './app.routers';
import {RouterModule} from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component';
import {ProjectSingleComponent} from './pages/project-single/project-single.component';
import {SafeHtmlPipe} from './pipes/safe-html-pipe';
import {HeaderService} from './services/header.service';
import {SortingService} from './services/sorting.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    SortingComponent,
    AboutComponent,
    ContactComponent,
    ProjectSingleComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [LanguageService, ContentService, HeaderService, SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
