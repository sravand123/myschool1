import { TestMarksResolverService } from './test-marks-resolver.service';
import { IndexResolverService } from './index-resolver.service';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLogInComponent } from './admin-login/admin-login.component';
import { AuthenticationService } from './authentication.service';
import { FormService } from './student-form/form.service';
import { ClassFormComponent } from './class-form/class-form.component';
import { TeacherUpdateComponent } from './teacher-update/teacher-update.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ClassDetailsResolverService } from './class-details-resolver.service';
import { TeacherResolverService } from './resolvers/teacher-resolver.service';
import { SubjectResolverService } from './resolvers/subject-resolver.service';
import { ClassResolverService } from './resolvers/class-resolver.service';
import { StudentResolverService } from './resolvers/student-resolver.service';
import { AllInOneService } from './all-in-one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule, MatTableModule, MatCardModule,
   MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { FormsModule } from '@angular/forms';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { IndexComponent } from './index/index.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestMarksComponent } from './test-marks/test-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentDetailsComponent,
    ClassDetailsComponent,
    SubjectDetailsComponent,
    TeacherDetailsComponent,
    StudentFormComponent,
    StudentUpdateComponent,
    TeacherFormComponent,
    TeacherUpdateComponent,
    ClassFormComponent,
    SubjectFormComponent,
    AdminLogInComponent,
    AdminSignupComponent,
    IndexComponent,
    TestFormComponent,
    TestMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule.forRoot(),
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    AgGridModule.withComponents([]),
    FormsModule,
    MatSelectModule,



  ],
  providers: [AllInOneService,
              StudentResolverService,
              ClassResolverService,
              SubjectResolverService,
              TeacherResolverService,
              ClassDetailsResolverService,
              FormService,
              AuthenticationService,
              IndexResolverService,
              TestMarksResolverService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
