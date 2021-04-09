import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsershasprogramCreateComponent } from './usershasprogram-create/usershasprogram-create.component';
import { UsershasprogramListComponent } from './usershasprogram-list/usershasprogram-list.component';
import { UsershasprogramUpdateComponent } from './usershasprogram-update/usershasprogram-update.component';


const routes: Routes = [
  {
    path: 'users-has-program-create',
    component: UsershasprogramCreateComponent
  },
  {
    path: 'users-has-program-list',
    component: UsershasprogramListComponent
  },
  {
    path: 'users-has-program-update',
    component: UsershasprogramUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsershasprogramRoutingModule { }
