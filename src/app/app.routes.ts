import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { SearchComponent } from './search/search.component';

import { PaymentComponent } from './dollaz/payment.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';

export const ROUTES: Routes = [
  { path: '',      component: SearchComponent },
  { path: 'search',  component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', component: ObjectDetailComponent },
  { path: 'payment',    component: PaymentComponent },
  { path: '**',    component: NoContentComponent },
];
