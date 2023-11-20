import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formpages',
  templateUrl: './formpages.component.html',
  styleUrls: ['./formpages.component.scss']
})
export class FormpagesComponent {

  userForm:FormGroup

  constructor(private fb: FormBuilder){
      this.userForm =this.fb.group({
        name:['',[Validators.required,Validators.minLength(3)]],
        lastName:['',Validators.required],
      });
  }
  public get nameControl(){
    return this.userForm.get('name')

  }
}
