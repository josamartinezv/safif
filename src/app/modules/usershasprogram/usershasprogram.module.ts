import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsershasprogramRoutingModule } from './usershasprogram-routing.module';
import { UsershasprogramListComponent } from './usershasprogram-list/usershasprogram-list.component';
import { UsershasprogramCreateComponent } from './usershasprogram-create/usershasprogram-create.component';
import { UsershasprogramUpdateComponent } from './usershasprogram-update/usershasprogram-update.component';


@NgModule({
  declarations: [UsershasprogramListComponent, UsershasprogramCreateComponent, UsershasprogramUpdateComponent],
  imports: [
    CommonModule,
    UsershasprogramRoutingModule
  ]
})
export class UsershasprogramModule { }
