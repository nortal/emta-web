import { Routes, RouterModule } from '@angular/router';
import { LjsWarehouseComponent } from './registries/warehouse/ljs.warehouse.component';
import { LjsWarehouseDetailComponent } from './registries/warehouse/ljs.warehouse.detail.component';

const ljsRoutes: Routes = [
  {
    path: 'ljs', redirectTo: '/ljs/warehouse', pathMatch: 'full',
  },
  {
    path: 'ljs',
    children: [
      {path: 'warehouse', component: LjsWarehouseComponent},
      {path: 'warehouse/:id', component: LjsWarehouseDetailComponent}
    ]
  }
];
export const LjsRouting = RouterModule.forChild(ljsRoutes);
