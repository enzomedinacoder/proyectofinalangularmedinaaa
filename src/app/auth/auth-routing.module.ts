import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginModule } from './pages/login/login.module';


const routes: Routes = [
    {
        path:'login',
        loadChildren:()=>import('./pages/login/login.module').then((m)=>LoginModule), 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
