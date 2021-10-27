import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEditHeroComponent } from './new-edit-hero/new-edit-hero.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewEditHeroRoutingModule } from './new-edit-hero.routing.module';



@NgModule({
  declarations: [NewEditHeroComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NewEditHeroRoutingModule
  ]
})
export class NewEditHeroModule { }
