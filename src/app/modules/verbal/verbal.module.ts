  import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerbalRoutingModule } from './verbal-routing.module';
import { VerbalCreateComponent } from './verbal-create/verbal-create.component';
import { VerbalListComponent } from './verbal-list/verbal-list.component';
import { VerbalUpdateComponent } from './verbal-update/verbal-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerbalViewComponent } from './verbal-view/verbal-view.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MatInputModule} from  '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { VerbalACreateComponent } from './verbal-a-create/verbal-a-create.component';
import { VerbalAListComponent } from './verbal-a-list/verbal-a-list.component';
import { VerbalAViewComponent } from './verbal-a-view/verbal-a-view.component';
import { VerbalAUpdateComponent } from './verbal-a-update/verbal-a-update.component';
import { PaginatorModule } from 'primeng/paginator'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {InputSwitchModule} from 'primeng/inputswitch';


import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast'



@NgModule({
  declarations: [VerbalCreateComponent, VerbalListComponent, VerbalUpdateComponent, VerbalViewComponent, VerbalACreateComponent, VerbalAListComponent, VerbalAViewComponent, VerbalAUpdateComponent],
  imports: [
    CommonModule,
    VerbalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    MatInputModule,
    MatIconModule,
    PaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    InputSwitchModule,
    MessagesModule,
    MessageModule,
    ToastModule

  ],
})
export class VerbalModule { }
