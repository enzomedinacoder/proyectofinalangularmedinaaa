import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';
import { selectCourseOptions, selectStudentOptions } from './store/enrollment.selectors';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {




  constructor(private store:Store,private dialog:MatDialog){




    this.store.dispatch(EnrollmentActions.loadEnrollments());


    this.store.select(selectStudentOptions)
    this.store.select(selectCourseOptions)

  }

  addEnrollment():void{
    this.dialog.open(EnrollmentDialogComponent)

  }

}
