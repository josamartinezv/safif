import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramNumberRoutingModule } from './program-number-routing.module';
import { ProgramNumberCreateComponent } from './program-number-create/program-number-create.component';
import { ProgramNumberUpdateComponent } from './program-number-update/program-number-update.component';
import { ProgramNumberListComponent } from './program-number-list/program-number-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProgramNumberCreateComponent, ProgramNumberUpdateComponent, ProgramNumberListComponent],
  imports: [
    CommonModule,
    ProgramNumberRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProgramNumberModule { }
