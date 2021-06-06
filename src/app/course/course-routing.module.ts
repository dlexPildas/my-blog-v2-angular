import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDetailComponent } from '@course/pages/course-detail/course-detail.component';
import { CoursesComponent } from '@course/pages/courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'detail/:idCourse', component: CourseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
