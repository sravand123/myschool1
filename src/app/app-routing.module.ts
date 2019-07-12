
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'students', loadChildren: './students/student.module#StudentModule'},
  {path: 'admin', loadChildren: './admins/admin.module#AdminModule'},
  {path: 'teachers', loadChildren: './teachers/teacher.module#TeacherModule'},
  {path: 'classes', loadChildren: './classes/class.module#ClassModule'},
  {path: 'tests', loadChildren: './tests/test.module#TestModule'},
  {path: 'subjects' , loadChildren: './subjects/subject.module#SubjectModule'},
  {path: 'index', loadChildren: './information/index.module#IndexModule'},
  {path: '**', redirectTo: 'admin/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


