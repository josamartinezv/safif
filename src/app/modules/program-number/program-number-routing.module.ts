import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramNumberCreateComponent } from './program-number-create/program-number-create.component';
import { ProgramNumberListComponent } from './program-number-list/program-number-list.component';
import { ProgramNumberUpdateComponent } from './program-number-update/program-number-update.component';


const routes: Routes = [

{
 path: 'program-number-create',
 component:ProgramNumberCreateComponent

},

{
  path: 'program-number-list',
  component:ProgramNumberListComponent
},

{
  path: 'program-number-update',
  component:ProgramNumberUpdateComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramNumberRoutingModule { }
