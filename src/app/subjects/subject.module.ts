import { SubjectRoutingModule } from './subject-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SubjectDetailsComponent,
    SubjectFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
