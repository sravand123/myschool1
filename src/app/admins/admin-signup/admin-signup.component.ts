import { Router } from '@angular/router';
import { FormService } from '../../students/student-form/form.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  public admin;
  public clicked;
  public errorMsg;
  constructor( private formService: FormService, private router: Router) { }

  ngOnInit() {
    this.admin = new Admin('', '');
    this.clicked = false;
    this.errorMsg = false;
  }
onSubmit() {
  this.clicked = true;
  this.formService.signupAdmin(this.admin).subscribe(
    () => {this.router.navigate(['admin', 'login']); },
    err => {this.clicked = false; this.errorMsg = true; } ,
    );
}

}
