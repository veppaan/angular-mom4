import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'courses', component: CoursesComponent }
];
