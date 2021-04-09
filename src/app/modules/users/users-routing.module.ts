import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersViewComponent } from './users-view/users-view.component';


const routes: Routes = [
  {
    path: 'users-create',
    component:UsersCreateComponent
  },
  {
    path:'users-list',
    component:UsersListComponent
  },
  {
    path:'users-update/:idUsers',
    component:UsersUpdateComponent
  },
  {
    path:'users-view/:idUsers',
    component:UsersViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
