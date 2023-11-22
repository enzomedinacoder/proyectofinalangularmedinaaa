import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { DasboardRoutingModule } from './pages/dashboard-routing.module';






@NgModule({
  declarations: [
    
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    DasboardRoutingModule,

  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
