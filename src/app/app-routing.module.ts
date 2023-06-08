import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'seleccion-fecha/:categoriaId/:tituloPagina', loadChildren: './seleccion-fecha/seleccion-fecha.module#SeleccionFechaPageModule'},
  {path: 'eventos-lista/:categoriaId/:tituloPagina', loadChildren: './eventos-lista/eventos-lista.module#EventosListaPageModule'},
  {
    path: 'seleccion-categoria/:categoriaId/:tituloPagina',
    loadChildren: './seleccion-categoria/seleccion-categoria.module#SeleccionCategoriaPageModule'
  },
  {
    path: 'programa-academico/:categoriaId/:tituloPagina',
    loadChildren: './programa-academico/programa-academico.module#ProgramaAcademicoPageModule'
  },
  {
    path: 'desfile-descripcion/:categoriaId/:tituloPagina',
    loadChildren: './desfile-descripcion/desfile-descripcion.module#DesfileDescripcionPageModule'
  },
  {
    path: 'pulque-descripcion/:categoriaId/:tituloPagina',
    loadChildren: './pulque-descripcion/pulque-descripcion.module#PulqueDescripcionPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
