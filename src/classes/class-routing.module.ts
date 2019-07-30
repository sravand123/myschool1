import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassDetailsResolverService } from '../app/class-details-resolver.service';
import { ClassDetailsComponent } from './class-details/class-details.component';
const routes: Routes = [
    {path: 'create', component: ClassFormComponent},
    { path: ':id', resolve: { classDetails : ClassDetailsResolverService}, component: ClassDetailsComponent},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ClassRoutingModule { }