import { HttpClientModule } from '@angular/common/http';
import { TestMarksResolverService } from './test-marks-resolver.service';
import { AuthenticationService } from './authentication.service';
import { FormService } from '../students/student-form/form.service';
import { ClassDetailsResolverService } from './class-details-resolver.service';
import { TeacherResolverService } from './resolvers/teacher-resolver.service';
import { SubjectResolverService } from './resolvers/subject-resolver.service';
import { ClassResolverService } from './resolvers/class-resolver.service';
import { StudentResolverService } from './resolvers/student-resolver.service';
import { AllInOneService } from './all-in-one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [AllInOneService,
              StudentResolverService,
              ClassResolverService,
              SubjectResolverService,
              TeacherResolverService,
              ClassDetailsResolverService,
              TestMarksResolverService,
              FormService,
              AuthenticationService,
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
