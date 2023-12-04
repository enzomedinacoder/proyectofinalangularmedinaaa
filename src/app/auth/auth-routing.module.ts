import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginModule } from './pages/login/login.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
    
    {
        path:'',
        component:AuthComponent,
        children:[
            {
                path:'login',
                loadChildren:()=>import('./pages/login/login.module').then((m)=>m.LoginModule), 
            },

        ]
    },
    
    {
        path:'**',
        redirectTo:'/auth/login'

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
