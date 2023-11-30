import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment } from '../components/enrollments-table/models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Enrollment Dialog Options':emptyProps(),  
    'Load Enrollment Dialog Options Success':props<{courses:Course[];students:User[]}>(),  
    'Load Enrollment Dialog Options Failure':props<{error:unknown}>(),
  }
});
