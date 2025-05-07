import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courseList: Course[] = [];
  searchedCourses : Course[] = [];

  constructor(private courseservice : CourseService) {}

  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courseList = data;
      this.searchedCourses = data;
    })
  }
}
