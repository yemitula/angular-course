import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  onCourseSelected(course) {
    console.log('App component - click event bubbled ...', course);
  }

}
