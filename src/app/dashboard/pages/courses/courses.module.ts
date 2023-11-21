import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
