import { Component } from '@angular/core';
import { CoursesService } from './components/courses-table/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  constructor(private coursesService:CoursesService){
    
  }

}
