import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListContentComponent } from './heroes-list-content/heroes-list-content.component';
import { PrimaryContentComponent } from './primary-content/primary-content.component';
import { NewEditHeroContentComponent } from './new-edit-hero-content/new-edit-hero-content.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UppercaseDirective } from '../directives/uppercase/uppercase.directive';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    HeroesListContentComponent,
    PrimaryContentComponent,
    NewEditHeroContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DirectivesModule
  ],
  exports: [
    HeroesListContentComponent,
    PrimaryContentComponent,
    NewEditHeroContentComponent
  ]
})
export class ComponentsModule { }
