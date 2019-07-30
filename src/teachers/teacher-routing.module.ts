import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassResolverService } from '../app/resolvers/class-resolver.service';
import { SubjectResolverService } from '../app/resolvers/subject-resolver.service';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherResolverService } from '../app/resolvers/teacher-resolver.service';
import { TeacherUpdateComponent } from './teacher-update/teacher-update.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';


const routes: Routes = [
    {path: 'create', resolve: {class_: ClassResolverService, subject : SubjectResolverService}, component: TeacherFormComponent},
    {path: 'update/:id', resolve: {class_: ClassResolverService, subject : SubjectResolverService,
      teacher : TeacherResolverService}, component: TeacherUpdateComponent},
    { path: ':id', resolve: { teacher : TeacherResolverService}, component: TeacherDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class TeacherRoutingModule {}
