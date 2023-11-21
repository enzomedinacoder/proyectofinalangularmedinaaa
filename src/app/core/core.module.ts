import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          deps:[HttpClient],
          useFactory: (http:HttpClient)=>{
            return new TranslateHttpLoader(http);
          },    
      }
  })
  ],
  exports:[

  ],
  providers:[
    {
      provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue:{
        appearence: 'outline'
      },
  
    },
    {provide:MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackdrop:true}}
  ]
})
export class CoreModule { }
