import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LanguageService} from './services/language.service';
import {ContentService} from './services/content.service';
import {HttpClientModule} from '@angular/common/http';
import {ProjectsComponent} from './components/projects/projects.component';
import {SortingComponent} from './components/projects/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LanguageService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
