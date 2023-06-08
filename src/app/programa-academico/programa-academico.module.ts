import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgramaAcademicoPage } from './programa-academico.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaAcademicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgramaAcademicoPage]
})
export class ProgramaAcademicoPageModule {}
