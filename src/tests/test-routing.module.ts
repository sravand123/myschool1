import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassResolverService } from '../app/resolvers/class-resolver.service';
import { TestFormComponent } from './test-form/test-form.component';
import { TestMarksResolverService } from '../app/test-marks-resolver.service';
import { TestMarksComponent } from './test-marks/test-marks.component';

const routes: Routes = [
    {path: 'create', resolve: {class: ClassResolverService}, component: TestFormComponent},

    {path: ':id', resolve: {marks: TestMarksResolverService}, component: TestMarksComponent},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class TestRoutingModule { }