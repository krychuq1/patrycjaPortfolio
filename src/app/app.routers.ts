import {Route} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';

export const routes: Route[] = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent}

];
