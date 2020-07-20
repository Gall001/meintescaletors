import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarregarCaracPageRoutingModule } from './carregar-carac-routing.module';

import { CarregarCaracPage } from './carregar-carac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarregarCaracPageRoutingModule
  ],
  declarations: [CarregarCaracPage]
})
export class CarregarCaracPageModule {}
