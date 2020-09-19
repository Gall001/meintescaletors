import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTecnicoPage } from './menu-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTecnicoPageRoutingModule {}
