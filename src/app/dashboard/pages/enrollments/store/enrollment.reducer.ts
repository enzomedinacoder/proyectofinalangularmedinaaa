import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../components/enrollments-table/models';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading:boolean;
  isLoadingDialogOptions:boolean;
  enrollments:Enrollment[];
  error:unknown

}

export const initialState: State = {

  isLoading:false,
  enrollments:[],
  error:null,
  isLoadingDialogOptions:false,

};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => ({...state,isLoading:true})),



  on(EnrollmentActions.loadEnrollmentsSuccess, (state, {data}) => ({...state,isLoading:false,enrollments:data})),




  on(EnrollmentActions.loadEnrollmentsFailure, (state, {error}) => ({...state,isLoading:false,error})),

  on(EnrollmentActions.loadEnrollmentDialogOptions,(state)=>{
    return{
...state,
    isLoadingDialogOptions:true,
}
  })

  );

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

