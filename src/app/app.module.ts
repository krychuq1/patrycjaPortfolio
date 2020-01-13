import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LanguageService} from './services/language.service';
import {ContentService} from './services/content.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import { GajolComponent } from './pages/gajol/gajol.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LearningComponent } from './pages/learning/learning.component';
import { ArlaComponent } from './pages/arla/arla.component';
import { EdcComponent } from './pages/edc/edc.component';
import { StpComponent } from './pages/stp/stp.component';
import { ValentinesComponent } from './pages/valentines/valentines.component';
import { ImareadComponent } from './pages/imaread/imaread.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    SortingComponent,
    AboutComponent,
    ContactComponent,
    ProjectSingleComponent,
    SafeHtmlPipe,
    GajolComponent,
    LearningComponent,
    ArlaComponent,
    EdcComponent,
    StpComponent,
    ValentinesComponent,
    ImareadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LanguageService, ContentService, HeaderService, SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
