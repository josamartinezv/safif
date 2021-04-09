import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorModule } from 'primeng/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { UsersViewComponent } from './users-view/users-view.component';


@NgModule({
  declarations: [UsersCreateComponent, UsersUpdateComponent, UsersListComponent, UsersViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
  ]
})
export class UsersModule { }
