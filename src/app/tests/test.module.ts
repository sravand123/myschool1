import { TestRoutingModule } from './test-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './test-form/test-form.component';
import { TestMarksComponent } from './test-marks/test-marks.component';

@NgModule({
  declarations: [
    TestFormComponent,
    TestMarksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([]),
    TestRoutingModule
  ]
})
export class TestModule { }
