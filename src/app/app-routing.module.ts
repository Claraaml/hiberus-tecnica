import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaEditarHeroesComponent } from './componentes/alta-editar-heroes/alta-editar-heroes.component';
import { ListadoHeroesComponent } from './componentes/listado-heroes/listado-heroes.component';

const routes: Routes = [
  { path: '', component: ListadoHeroesComponent },
  { path: 'alta-editar', component: AltaEditarHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
