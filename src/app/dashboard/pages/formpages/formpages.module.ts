import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormpagesComponent } from './formpages.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormpagesComponent
  ],
  imports: [
    CommonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule
  ],
  exports:[
    FormpagesComponent
  ]
})
export class FormpagesModule {


}
