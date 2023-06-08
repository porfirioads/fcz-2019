import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeleccionFechaPage } from './seleccion-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionFechaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeleccionFechaPage]
})
export class SeleccionFechaPageModule {}
