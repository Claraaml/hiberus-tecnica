import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaEditarHeroesComponent } from './componentes/alta-editar-heroes/alta-editar-heroes.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'alta-editar/:accion/:id', component: AltaEditarHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
