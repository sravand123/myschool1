import { Observable } from 'rxjs/Observable';
import { AllInOneService } from '../all-in-one.service';
import { IStudent } from '../Interfaces';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/of';

@Injectable()
export class StudentResolverService implements Resolve<IStudent[] | string> {

  constructor( private studentService: AllInOneService, private router: Router) { }
  resolve( route: ActivatedRouteSnapshot , state: RouterStateSnapshot ): Observable <IStudent[] | string>{
        return (this.studentService.get_students())
        .pipe(catchError((err: string) => {
          return Observable.of(err);
        }));
  }
}
