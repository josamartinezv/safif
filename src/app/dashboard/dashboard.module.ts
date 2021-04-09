import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { VerbalModule } from '../modules/verbal/verbal.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AuthSharedModule } from '../auth/auth-shared/auth-shared.module';
import { HandbookComponent } from './handbook/handbook.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [MainDashboardComponent, NavbarComponent ,AsideComponent, FooterComponent, HandbookComponent, HeaderComponent, CoverComponent,HomeDashboardComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    VerbalModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    AuthSharedModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class DashboardModule { }
