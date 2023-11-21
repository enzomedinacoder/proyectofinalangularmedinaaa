import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';





@NgModule({
  declarations: [
    
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    UsersModule,
    SharedModule,
    HomeModule,
    RouterModule,
    CoursesModule
    
    


  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
