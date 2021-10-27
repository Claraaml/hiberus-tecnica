import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/heroes-list/heroes-list.module').then(m => m.HeroesListModule) },
  { path: 'alta-editar', loadChildren: () => import('./pages/new-edit-hero/new-edit-hero.module').then(m => m.NewEditHeroModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
