import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ApiUrl } from 'src/app/config/url.token';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,

  ],
  exports:[UsersComponent],
  providers:[UsersService,
  {provide:ApiUrl,
    useValue:{
      url:'http://localhost:34322/users',
    }
  }
  ]
})
export class UsersModule { }
