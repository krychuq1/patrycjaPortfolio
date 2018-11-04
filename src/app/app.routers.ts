import {Route} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ProjectSingleComponent} from './pages/project-single/project-single.component';

export const routes: Route[] = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'project/:name', component: ProjectSingleComponent}

];
