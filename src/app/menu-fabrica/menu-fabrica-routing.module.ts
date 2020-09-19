import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuFabricaPage } from './menu-fabrica.page';

const routes: Routes = [
  {
    path: '',
    component: MenuFabricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuFabricaPageRoutingModule {}
