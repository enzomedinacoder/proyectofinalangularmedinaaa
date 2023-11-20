import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
style='bolder'
showSidebar=true; 
showHome =true;

constructor(private translateService:TranslateService){}

  changeLanguage(ev:MatSelectChange):void{
    this.translateService.use(ev.value)

  }

}

