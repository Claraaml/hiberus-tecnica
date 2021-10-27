import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeroesListRoutingModule } from './heroes-list.routing.module';



@NgModule({
  declarations: [HeroesListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HeroesListRoutingModule
  ]
})
export class HeroesListModule { }
