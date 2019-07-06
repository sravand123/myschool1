import { Injectable } from '@angular/core';
import { AllInOneService } from '../all-in-one.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudent, ISubject } from '../Interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectResolverService {
  constructor( private subjectService: AllInOneService, private router: Router) { }
  resolve( route: ActivatedRouteSnapshot , state: RouterStateSnapshot ): Observable <ISubject[] | string>{
        return this.subjectService.get_Subjects()
        .pipe(catchError((err: string) => {
          return Observable.of(err);
        }));
  }
}
