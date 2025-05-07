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
  searchValue: string = "";

  constructor(private courseservice : CourseService) {}

  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courseList = data;
      this.searchedCourses = data;
    })
  }

  applySearch(): void{
    this.searchedCourses = this.courseList.filter((course) => 
      course.coursename.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  sortByCode(){
    this.searchedCourses.sort((a, b) => a.code.localeCompare(b.code)); 
  }
}
