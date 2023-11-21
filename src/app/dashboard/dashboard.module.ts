import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormpagesModule } from './pages/formpages/formpages.module';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FormpagesModule,
    UsersModule,
    SharedModule,
    HomeModule,
    RouterModule
    
    


  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
