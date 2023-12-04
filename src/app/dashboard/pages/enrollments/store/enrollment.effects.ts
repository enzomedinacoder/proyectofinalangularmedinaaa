
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

import { Course } from '../../courses/models';
import { User } from '../../users/models';
import { Observable, catchError, concatMap, forkJoin, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateEnrollmentPayload, Enrollment } from '../components/enrollments-table/models';
import { Injectable } from '@angular/core';

@Injectable()
export class EnrollmentEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
    
      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>
      
        this.getEnrollments().pipe(
        
          map((data) => EnrollmentActions.loadEnrollmentsSuccess({ data })),
      
          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });
  loadEnrollmentDialogOptions$ = createEffect(() =>
    this.actions$.pipe(
      // FILTRO LAS ACCIONES loadEnrollmentDialogOptions
      ofType(EnrollmentActions.loadEnrollmentDialogOptions),
      concatMap(() =>
        this.getEnrollmentDialogOptions().pipe(
          map((resp) =>
            // SI SALE BIEN loadEnrollmentDialogOptionsSuccess
            EnrollmentActions.loadEnrollmentDialogOptionsSuccess(resp)
          ),
          catchError((err) =>
            of(
              EnrollmentActions.loadEnrollmentDialogOptionsFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );

  createEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.createEnrollment),
      concatMap((action) => {
        return this.createEnrollment(action.payload).pipe(
          // Si sale bien
          map((data) => EnrollmentActions.loadEnrollments()),
          // Si hay error
          catchError((error) =>
            of(EnrollmentActions.createEnrollmentFailure({ error }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  createEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollment> {
    return this.httpClient.post<Enrollment>(
      `${environment.baseUrl}/enrollments`,
      payload
    );
  }

  getEnrollmentDialogOptions(): Observable<{
    courses: Course[];
    students: User[];
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<User[]>(`${environment.baseUrl}/users?role=STUDENT`),
    ]).pipe(
      map(([courses, students]) => {
        return {
          courses,
          students,
        };
      })
    );
  }
  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(
      `${environment.baseUrl}/enrollments?_expand=course&_expand=user`
    );
  }
}