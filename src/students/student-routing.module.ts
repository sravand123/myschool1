import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassResolverService } from '../app/resolvers/class-resolver.service';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentResolverService } from '../app/resolvers/student-resolver.service';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path: 'create', resolve: {class_: ClassResolverService}, component: StudentFormComponent},
  {path: 'update/:id', resolve: {class: ClassResolverService, student : StudentResolverService},
   component: StudentUpdateComponent},
  { path: ':id', resolve: { student : StudentResolverService}, component: StudentDetailsComponent},

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StudentRoutingModule { }
