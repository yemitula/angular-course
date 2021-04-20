import { AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChild('cardRef', { read: ElementRef }) card: CourseCardComponent;

  @ViewChild('container') containerDiv: ElementRef;

  @ViewChild('courseImage') courseImage: ElementRef;

  @ViewChildren(CourseCardComponent, { read: ElementRef }) cards: QueryList<CourseCardComponent>;

  ngAfterViewInit() {
    // console.log(this.containerDiv);

    this.cards.changes.subscribe(
      cards => console.log(cards)
    );

    // console.log(this.cards.first);


  }


  onCourseSelected(course) {
    console.log('App component - click event bubbled ...', course);
    // console.log(this.card);
    // console.log(this.containerDiv);
    console.log(this.courseImage);

  }

  onCoursesEdited() {
    console.log('onCoursesEdited');

    this.courses.push(
      {
        id: 2,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
      }
    )
  }

}
