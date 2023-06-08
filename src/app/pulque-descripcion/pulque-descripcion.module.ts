import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PulqueDescripcionPage } from './pulque-descripcion.page';

const routes: Routes = [
  {
    path: '',
    component: PulqueDescripcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PulqueDescripcionPage]
})
export class PulqueDescripcionPageModule {}
