import { TestMarksResolverService } from './test-marks-resolver.service';
import { TestMarksComponent } from './test-marks/test-marks.component';
import { TestFormComponent } from './test-form/test-form.component';
import { IndexComponent } from './index/index.component';
import { IndexResolverService } from './index-resolver.service';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectDetailsResolverService } from './subject-details-resolver.service';
import { TeacherUpdateComponent } from './teacher-update/teacher-update.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { SubjectResolverService } from './resolvers/subject-resolver.service';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassDetailsResolverService } from './class-details-resolver.service';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherResolverService } from './resolvers/teacher-resolver.service';
import { ClassResolverService } from './resolvers/class-resolver.service';
import { StudentResolverService } from './resolvers/student-resolver.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLogInComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path : 'index' , resolve: {student : StudentResolverService}, component: IndexComponent},
  {path: 'students/create', resolve: {class_: ClassResolverService}, component: StudentFormComponent},
  {path: 'teachers/create', resolve: {class_: ClassResolverService, subject : SubjectResolverService}, component: TeacherFormComponent},
  {path: 'classes/create', component: ClassFormComponent},

  {path: 'teachers/update/:id', resolve: {class_: ClassResolverService, subject : SubjectResolverService,
    teacher : TeacherResolverService}, component: TeacherUpdateComponent},
  {path: 'students/update/:id', resolve: {class: ClassResolverService, student : StudentResolverService},
   component: StudentUpdateComponent},
  { path: 'students/:id', resolve: { student : StudentResolverService}, component: StudentDetailsComponent},
  { path: 'teachers/:id', resolve: { teacher : TeacherResolverService}, component: TeacherDetailsComponent},
  { path: 'classes/:id', resolve: { classDetails : ClassDetailsResolverService}, component: ClassDetailsComponent},
  { path: 'subjects/:id', resolve: { subjectDetails : SubjectDetailsResolverService}, component: SubjectDetailsComponent},
  {path: 'tests/create', resolve: {class: ClassResolverService}, component: TestFormComponent},
  {path: 'admin/signup', component: AdminSignupComponent},
  {path: 'admin/login', component: AdminLogInComponent},
  {path: 'tests/:id', resolve: {marks: TestMarksResolverService}, component: TestMarksComponent},
  {path: '**', component: AdminLogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


