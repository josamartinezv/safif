import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RolCreateComponent } from './rol-create/rol-create.component';
import { RolUpdateComponent } from './rol-update/rol-update.component';
import { RolListComponent } from './rol-list/rol-list.component';


@NgModule({
  declarations: [RolCreateComponent, RolUpdateComponent, RolListComponent],
  imports: [
    CommonModule,
    RolRoutingModule
  ]
})
export class RolModule { }
