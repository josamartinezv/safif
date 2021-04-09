import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgramCreateComponent } from './program-create/program-create.component';
import { ProgramUpdateComponent } from './program-update/program-update.component';
import { ProgramListComponent } from './program-list/program-list.component';


@NgModule({
  declarations: [ProgramCreateComponent, ProgramUpdateComponent, ProgramListComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }
