import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolCreateComponent } from './rol-create/rol-create.component';
import { RolUpdateComponent } from './rol-update/rol-update.component';
import { RolListComponent } from './rol-list/rol-list.component';


const routes: Routes = [
  {
    path: 'rol-create',
    component:RolCreateComponent
   },
   {
    path: 'rol-update',
    component:RolUpdateComponent
   },
   {
    path: 'rol-list',
    component:RolListComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
