import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './users.service';
import { ApiUrl } from 'src/app/config/url.token';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],
  exports:[UsersComponent],
  providers:[
  {provide:ApiUrl,
    useValue:{
      url:'http://localhost:34322/users',
    }

  }
  ]
})
export class UsersModule { }
