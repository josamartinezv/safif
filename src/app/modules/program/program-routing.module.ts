import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramCreateComponent } from './program-create/program-create.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramUpdateComponent } from './program-update/program-update.component';


const routes: Routes = [

  {
    path: 'program-create',
    component: ProgramCreateComponent
  },

  {
    path: 'program-list',
    component: ProgramListComponent

  },

  {
    path: 'program-update',
    component: ProgramUpdateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
