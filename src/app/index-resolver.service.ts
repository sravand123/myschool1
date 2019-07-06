import { Observable } from 'rxjs/Observable';
import { AllInOneService } from './all-in-one.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndexResolverService implements Resolve<any> {

  constructor(private service : AllInOneService) { }

  resolve( route : ActivatedRouteSnapshot, state : RouterStateSnapshot): Observable<any>{
       return this.service.get_Index_Details();
  }
}
