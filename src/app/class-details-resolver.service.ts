import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AllInOneService } from './all-in-one.service';
import { Injectable } from '@angular/core';
import { ICDetails } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClassDetailsResolverService implements Resolve<ICDetails | string> {

  constructor(private classDetailService: AllInOneService) { }
  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<ICDetails | string> {

    return this.classDetailService.get_Class_Details(route.params.id)
    .pipe(catchError((err: string) => {
      return Observable.of(err);
}));
  }
}
