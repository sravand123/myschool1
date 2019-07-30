import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectDetailsResolverService } from '../app/subject-details-resolver.service';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';

const routes: Routes = [
    {path: 'create', component: SubjectFormComponent},

    { path: ':id', resolve: { subjectDetails : SubjectDetailsResolverService}, component: SubjectDetailsComponent},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class SubjectRoutingModule { }