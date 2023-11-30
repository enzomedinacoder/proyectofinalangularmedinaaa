import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';

@Component({
  selector: 'app-enrollment-dialog',
  templateUrl: './enrollment-dialog.component.html',
  styleUrls: ['./enrollment-dialog.component.scss']
})
export class EnrollmentDialogComponent {
  constructor(private store:Store){
    this.store.dispatch(EnrollmentActions.loadEnrollmentDialogOptions())
  }

}
