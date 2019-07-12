import { StudentRoutingModule } from './student-routing.module';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student-form/student-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StudentFormComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
