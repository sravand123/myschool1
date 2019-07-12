import { ClassRoutingModule } from './class-routing.module';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClassDetailsComponent,
    ClassFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClassRoutingModule

  ]
})
export class ClassModule { }
