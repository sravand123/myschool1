import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { catchError } from 'rxjs/operators';
import { IStudent, IClass, ISubject, ITeacher, IMark, ICDetails } from './Interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllInOneService {
  private studentUrl = 'api/student/list';
  private teacherUrl = 'api/teacher/list';
  private subjectUrl = 'api/subject/list';
  private classUrl = 'api/class/list';
  private marksurl = 'api/marks';
  private classDetailsUrl = 'api/class/';
  private subjectDetailsUrl = 'api/subject/';

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) { }

  get_students(): Observable<IStudent[]> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<IStudent[]>(this.studentUrl,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }

  get_Classes(): Observable<IClass[]> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<IClass[]>(this.classUrl,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }

  get_Subjects(): Observable<ISubject[]> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<ISubject[]>(this.subjectUrl,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }

  get_Teachers(): Observable<ITeacher[]> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<ITeacher[]>(this.teacherUrl,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }

  get_Marks(): Observable<IMark[]> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<IMark[]>(this.marksurl,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }

  get_Class_Details(id): Observable<ICDetails> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<ICDetails>(this.classDetailsUrl + id,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }
  get_Subject_Details(id): Observable<ICDetails> {
    if (this.auth.isLoggedIn()) {
    return this.http.get<ICDetails>(this.subjectDetailsUrl + id,
        { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    } else {
     this.router.navigate(['']);
   }
  }

  get_Index_Details() {
    if (this.auth.isLoggedIn()) {
    // const students = this.http.get<IStudent[]>(this.studentUrl,
    //   { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    const classes = this.http.get<IClass[]>(this.classUrl,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    const teachers = this.http.get<ITeacher[]>(this.teacherUrl,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    const subjects = this.http.get<ISubject[]>(this.subjectUrl,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
    return forkJoin([classes, teachers, subjects]);
    } else {
      this.router.navigate(['']);
    }


  }
  private handleError(errorResponse: HttpErrorResponse) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error(`client side error : ${errorResponse.status}`);
    } else {
      console.error(`server side error : ${errorResponse.status}`);
    }
    return throwError(errorResponse.statusText);
  }
}
