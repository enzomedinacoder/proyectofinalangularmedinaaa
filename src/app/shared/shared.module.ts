import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import {MatTableModule} from '@angular/material/table';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { HeadlineDirective } from './directives/headline.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';







@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorsPipe,
    HeadlineDirective
  ],
  imports: [
    CommonModule,

  ],
  exports:[ 
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule ,
    FullnamePipe,
    MatTableModule,
    FormErrorsPipe,
    MatSelectModule,
    MatListModule,
    HeadlineDirective,
    MatDatepickerModule,
  
    
  ]
})
export class SharedModule { }
