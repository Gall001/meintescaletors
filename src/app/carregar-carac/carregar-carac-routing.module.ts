import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarregarCaracPage } from './carregar-carac.page';

const routes: Routes = [
  {
    path: '',
    component: CarregarCaracPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarregarCaracPageRoutingModule {}
