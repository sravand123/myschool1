import { IndexComponent } from './index/index.component';
import { IndexRoutingModule } from './index-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
