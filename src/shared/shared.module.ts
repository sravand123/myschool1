import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule, MatFormFieldModule, 
  MatInputModule, MatTabsModule, MatListModule, MatSelectModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
   FormsModule,
   HttpClientModule,
   MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
