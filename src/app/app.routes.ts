import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { SearchComponent } from './search/search.component';

import { PaymentComponent } from './dollaz/payment.component';
import { TerminalComponent } from './dollaz/terminal.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { TrailComponent } from './trail/trail.component';
import { UigComponent } from './uig/uig.component';
import { Uig08FormSelectsComponent } from './uig/uig.08.form.selects.component';
import { Uig12MessagesComponent } from './uig/uig.12.messages.component';
import { ItemsListComponent } from './items/items-list.component';

export const ROUTES: Routes = [
  {path: '', component: TrailComponent},
  {path: 'trail', component: TrailComponent},

  {path: 'uig', component: UigComponent},
  {path: 'uig08-selects', component: Uig08FormSelectsComponent},
  {path: 'uig12', component: Uig12MessagesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'items', component: ItemsListComponent},
  {path: 'detail', component: ObjectDetailComponent},
  {
    path: 'payment',
    canActivate: [AuthGuard],
    component: PaymentComponent
  },
  {path: 'terminal', component: TerminalComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoContentComponent},
];
