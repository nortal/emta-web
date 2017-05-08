import { Routes, RouterModule } from '@angular/router';

import { LjsWarehouseComponent } from './registries/warehouse/ljs.warehouse.component';

const ljsRoutes: Routes = [
  {
    path: 'ljs',
    children: [
      {path: '', component: LjsWarehouseComponent},
      {path: ':id', component: LjsWarehouseComponent}
    ]
  }
];
export const LjsRouting = RouterModule.forChild(ljsRoutes);
