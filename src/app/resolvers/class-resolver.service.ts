import { AllInOneService } from '../all-in-one.service';
import { IClass, IStudent } from '../Interfaces';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassResolverService implements Resolve<IClass[] | string> {

  constructor( private classService : AllInOneService   ,private router: Router){}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable <IClass[] | string > {
      return this.classService.get_Classes()
      .pipe(catchError((err: string) => {
              return Observable.of(err);
      }));
  }
}
