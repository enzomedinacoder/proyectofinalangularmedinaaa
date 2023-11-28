import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
  ]
})
export class EnrollmentsModule { }
