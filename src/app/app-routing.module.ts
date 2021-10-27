import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEditHeroComponent } from './components/new-edit-hero/new-edit-hero.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'alta-editar/:accion/:id', component: NewEditHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
