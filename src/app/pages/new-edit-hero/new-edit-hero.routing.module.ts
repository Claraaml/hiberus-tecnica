import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEditHeroComponent } from './new-edit-hero/new-edit-hero.component';

const routes: Routes = [
  { path: '/:action/:id', component: NewEditHeroComponent },
  { path: '/:action', component: NewEditHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEditHeroRoutingModule { }
