import { AllInOneService } from './all-in-one.service';
import { ISdetails } from './Interfaces';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectDetailsResolverService implements Resolve<ISdetails> {

  constructor(private service: AllInOneService) { }
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISdetails> {
    return this.service.get_Subject_Details(route.params.id);
  }

}
