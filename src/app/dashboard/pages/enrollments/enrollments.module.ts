import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentEffects } from './store/enrollment.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { EnrollmentsComponent } from './enrollments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';



@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent,
    EnrollmentDialogComponent,
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects]),
    SharedModule,
  ]
})
export class EnrollmentsModule { }
