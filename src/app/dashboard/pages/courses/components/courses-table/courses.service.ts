import { Injectable } from "@angular/core";
import { Course } from "../../models";
import { Observable, of } from "rxjs";




@Injectable({providedIn:'root'})

export class CoursesService{

    courses:Course[]=[

        {
            id:1,
            name:'Javascript',
            endDate:new Date(),
            startDate: new Date()
        },
        
        {
            id:1,
            name:'Angular',
            endDate:new Date(),
            startDate: new Date()
        }
    ]

    getCourses():Observable<Course[]>{
        return of(this.courses)
    }

}