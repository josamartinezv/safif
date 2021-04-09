import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { VerbalListComponent } from '../modules/verbal/verbal-list/verbal-list.component';
import { VerbalViewComponent } from '../modules/verbal/verbal-view/verbal-view.component';
import { Authority } from '../auth/constans/authorities';
import { UserRouteAccessGuard } from '../auth/guard/user-route-access.guard';
import { HandbookComponent } from './handbook/handbook.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';


const routes: Routes = [
  {
    path: '',
    //permisos para roles  user-route-acces
    data: {
      authorities: [Authority.INSTRUCTOR]
                   [Authority.APRENDIZ],
    },
    canActivate:[UserRouteAccessGuard],
    component:MainDashboardComponent,
    children:[

  {
    path: 'program',
    data: {
      authorities: [Authority.INSTRUCTOR]},
    loadChildren: () => import ('../modules/program/program.module')
    .then(m => m.ProgramModule)
  },
  {
    path: 'users',
    loadChildren: () => import ('../modules/users/users.module')
    .then(m => m.UsersModule)
  },
  {
    path: 'program-number',
    loadChildren: ()=> import ('../modules/program-number/program-number.module')
    .then(m=> m.ProgramNumberModule )
  },
  {
    path: 'rol',
    loadChildren:()=> import ('../modules/rol/rol.module')
    .then(m=> m.RolModule)
  },
  {
    path: 'verbal',
    loadChildren:()=> import ('../modules/verbal/verbal.module')
    .then(m=> m.VerbalModule)
  },
  {
    path: 'usershasprogram',
    loadChildren:()=> import ('../modules/usershasprogram/usershasprogram.module')
    .then(m=> m.UsershasprogramModule)

  }
  ,{
    path:'handbook',
    component:HandbookComponent
  },

  {
    path:'home-dashboard',
    component:HomeDashboardComponent
  },



  {
    path:'',
    redirectTo: 'home-dashboard',
    pathMatch: 'full'
  },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

