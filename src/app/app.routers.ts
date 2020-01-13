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

export const routes: Route[] = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gajol', component: GajolComponent},
  { path: '&learning', component: LearningComponent},
  { path: 'arla', component: ArlaComponent},
  { path: 'edc', component: EdcComponent},
  { path: 'stp', component: StpComponent},
  { path: 'valentines', component: ValentinesComponent},
  { path: 'imaread', component: ImareadComponent},
  { path: 'project/:name', component: ProjectSingleComponent},

];
