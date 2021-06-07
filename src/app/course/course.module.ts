import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from '@course/course-routing.module';
import { CourseDetailComponent } from '@course/pages/course-detail/course-detail.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { ListCardCourseComponent } from './components/list-card-course/list-card-course.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CourseDetailComponent,
    CardCourseComponent,
    ListCardCourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
