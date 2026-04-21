import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UserDatailsComponent } from './user-datails/user-datails.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';





@NgModule({
  declarations: [
    UserDatailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    PipesModule
  ],
  exports: [
    UserDatailsComponent,
    FilterComponent,
    UsersListComponent
  ]
})
export class ComponentsModule { }
