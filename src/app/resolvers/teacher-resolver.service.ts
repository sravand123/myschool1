import { Injectable } from '@angular/core';
import { AllInOneService } from '../all-in-one.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISubject, ITeacher } from '../Interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherResolverService {

  constructor( private teacherService: AllInOneService, private router: Router) { }
  resolve( route: ActivatedRouteSnapshot , state: RouterStateSnapshot ): Observable <ITeacher[] | string>{
        return this.teacherService.get_Teachers()
        .pipe(catchError((err: string) => {
          return Observable.of(err);
        }));
  }
}
