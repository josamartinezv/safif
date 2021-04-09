import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerbalListComponent } from './verbal-list/verbal-list.component';
import { VerbalCreateComponent } from './verbal-create/verbal-create.component';
import { VerbalUpdateComponent } from './verbal-update/verbal-update.component';
import { VerbalViewComponent } from './verbal-view/verbal-view.component';
import { VerbalACreateComponent } from './verbal-a-create/verbal-a-create.component';
import { VerbalAListComponent } from './verbal-a-list/verbal-a-list.component';
import { VerbalAUpdateComponent } from './verbal-a-update/verbal-a-update.component';
import { VerbalAViewComponent } from './verbal-a-view/verbal-a-view.component';


const routes: Routes = [
  {
    path:'verbal-create/:idUser',
    component: VerbalCreateComponent
  },
  {
    path:'verbal-list',
    component: VerbalListComponent
  },
  {
    path:'verbal-update/:idVerbalCalled',
    component: VerbalUpdateComponent
  },
  {
    path:'verbal-view',
    component: VerbalViewComponent
  },
  {
    path:'verbal-a-create',
    component: VerbalACreateComponent
  },
  {
    path:'verbal-a-list',
    component: VerbalAListComponent
  },
  {
    path:'verbal-a-update/:idVerbalCalled',
    component: VerbalAUpdateComponent
  },
  {
    path:'verbal-a-view/:idVerbalCalled',
    component: VerbalAViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerbalRoutingModule { }
