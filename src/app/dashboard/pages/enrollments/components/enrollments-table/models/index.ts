import { Course } from "src/app/dashboard/pages/courses/models";
import { User } from "src/app/dashboard/pages/users/models";

export interface Enrollment{
    id:number;
    courseId:number;
    userId:number;
    user?:User;
    course?:Course
}
export interface CreateEnrollmentPayload{
    courseId:number|null;
    userId:number|null;
}