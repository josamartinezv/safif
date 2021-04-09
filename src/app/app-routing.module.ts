import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';


const routes: Routes = [

  {
    path:'dashboard',
    loadChildren:() => import ('./dashboard/dashboard.module') 
    .then(m => m.DashboardModule)
  },

  {
    path:'login',
    component: LoginComponent,
  },
  
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'access-denied',
    component:AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
