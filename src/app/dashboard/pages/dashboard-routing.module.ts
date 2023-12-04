import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CourseDetailComponent } from "./courses/components/course-detail/course-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/components/user-detail/user-detail.component";
import { DashboardComponent } from "../dashboard.component";
import { UsersTableComponent } from "./users/components/users-table/users-table.component";
import { adminGuard } from "src/app/core/guards/admin.guard";

@NgModule ({
    imports:[
        RouterModule.forChild([
            {
                path:'',
                
                component:DashboardComponent,
                children:[
                    {
                        path:'home',
                        component:HomeComponent
                    },

                    {
                        path:'courses',
                        loadChildren:() =>import('./courses/courses.module').then((m)=>m.CoursesModule)
                    },
                    {
                        path:'users',
                        canActivate:[adminGuard],
                        loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule )
                    },
                    {
                        path:'enrollments',
                        loadChildren:()=>import('./enrollments/enrollments.module').then((m)=>m.EnrollmentsModule)
                    },

                    {
                    path:'**',
                    redirectTo:'home'
                    },
                ]
            },
        ]),
    ],
    exports:[
        RouterModule
    ]
})
export class DasboardRoutingModule{


}