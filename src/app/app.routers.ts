import {Route} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ProjectSingleComponent} from './pages/project-single/project-single.component';
import {AppComponent} from './app.component';
import {GajolComponent} from './pages/gajol/gajol.component';
import {LearningComponent} from './pages/learning/learning.component';
import {ArlaComponent} from './pages/arla/arla.component';
import {EdcComponent} from './pages/edc/edc.component';
import {StpComponent} from './pages/stp/stp.component';
import {ValentinesComponent} from './pages/valentines/valentines.component';
import {ImareadComponent} from './pages/imaread/imaread.component';
import {AxaComponent} from './pages/axa/axa.component';
import {AndeaComponent} from './pages/andea/andea.component';
import {PosterChallengeComponent} from './pages/poster-challenge/poster-challenge.component';
import {OtisComponent} from './pages/otis/otis.component';
import {LogofolioComponent} from './pages/logofolio/logofolio.component';
import {BookComponent} from './pages/book/book.component';
import {SecretProcjectComponent} from './pages/secret-procject/secret-procject.component';
import {CrossComponent} from './pages/cross/cross.component';
import {LingvoComponent} from './pages/lingvo/lingvo.component';
import {HoperComponent} from './pages/hoper/hoper.component';
import {AuthService} from './services/auth.service';

export const routes: Route[] = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gajol', component: GajolComponent},
  { path: '&learning', component: LearningComponent},
  { path: 'arla', component: ArlaComponent},
  { path: 'edc', component: EdcComponent},
  { path: 'stp', component: StpComponent},
  { path: 'axa', component: AxaComponent, canActivate: [AuthService]},
  { path: 'andea', component: AndeaComponent, canActivate: [AuthService]},
  { path: 'valentines', component: ValentinesComponent},
  { path: 'imaread', component: ImareadComponent},
  { path: 'poster-challenge', component: PosterChallengeComponent},
  { path: 'otis', component: OtisComponent},
  { path: 'logofolio', component: LogofolioComponent},
  {path: 'book', component: BookComponent},
  {path: 'cross', component: CrossComponent, canActivate: [AuthService]},
  {path: 'lingvo', component: LingvoComponent, canActivate: [AuthService]},
  {path: 'hoper', component: HoperComponent, canActivate: [AuthService]},
  {path: 'secretProjects', component: SecretProcjectComponent, canActivate: [AuthService]},
  { path: 'project/:name', component: ProjectSingleComponent},
];
