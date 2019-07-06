import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { TokenResponse, AuthenticationService } from '../authentication.service';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private baseurl = 'api/student/';
  private turl = 'api/teacher/';
  private curl = 'api/class/';
  private adurl = 'api/admin/signup';
  private logurl = 'api/admin/login';
  private murl = 'api/marks/';
  private testUrl = 'api/test/create';
  private testMarksUrl = 'api/test/';
  private subjectUrl = 'api/subject/create';
  private testStudents = 'api/student/test/';

  constructor(private Http: HttpClient , private auth: AuthenticationService, private router: Router) { }

  submitStudent(form) {
    if (this.auth.isLoggedIn()) {
       return this.Http.post<any>(this.baseurl + 'create', form,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
    } else {
      this.router.navigate(['']);
    }
  }
 

submitTeacher(form) {
    if (this.auth.isLoggedIn()) {
      return this.Http.post<any>(this.turl + 'create', form,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
    } else {
     this.router.navigate(['']);
   }
}
updateTeacher(form, id) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.turl + id + '/update', form,
    { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
  }

updateStudent(form, id) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.baseurl + id + '/update', form,
    { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
}
submitSubject(form) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.subjectUrl, form,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
    this.router.navigate(['']);

  }
}
submitClass(form) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.curl + 'create', form,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
}
submitMarks(id, value) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.murl + id, value,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
}

signupAdmin(form) {
  return this.Http.post<any>(this.adurl, form).pipe(catchError(this.errorHandler));
}
loginAdmin(form) {
  const base = this.Http.post<any>(this.logurl, form).pipe(catchError(this.errorHandler));
  const request = base.pipe(map((data: TokenResponse) => {
    if (data.token) {
      this.auth.saveToken(data.token);
    }
    return data;
  })
);
  return request;
}

getMarks(id) {
  if (this.auth.isLoggedIn()) {
    return this.Http.get<any>(this.testMarksUrl + id,
    { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
}

updateMarks(value) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.murl + '/update', value,
    { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
}

submitTest(value) {
  if (this.auth.isLoggedIn()) {
    return this.Http.post<any>(this.testUrl, value,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
  } else {
   this.router.navigate(['']);
 }
}
// get_Students_Test(id) {
//   if (this.auth.isLoggedIn()) {
//     return this.Http.get<any>(this.testStudents + id,
//       { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
//   } else {
//     this.router.navigate(['']);

//   }
// }

private errorHandler(errorResponse: HttpErrorResponse) {
  if ( errorResponse.error instanceof ErrorEvent) {
    console.error(`client side error : ${errorResponse.status}`);
  } else {
    console.error(`server side error : ${errorResponse.status}`);
  }
  return throwError(errorResponse.statusText);
}


}

