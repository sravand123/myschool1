import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentResolverService } from '../app/resolvers/student-resolver.service';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
    {path : '' , resolve: {student : StudentResolverService}, component: IndexComponent},

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class IndexRoutingModule { }