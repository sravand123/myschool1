import { Observable } from 'rxjs/Observable';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FormService } from './students/student-form/form.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestMarksResolverService implements Resolve<any> {

  constructor(private service : FormService) { }
  resolve(route : ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<any>{
    return this.service.getMarks(route.params.id);
  }
}
