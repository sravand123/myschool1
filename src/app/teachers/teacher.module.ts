import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from './../shared/shared.module';
import { TeacherUpdateComponent } from './teacher-update/teacher-update.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TeacherDetailsComponent,
    TeacherFormComponent,
    TeacherUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
