import { Router } from '@angular/router';
import { FormService } from './../student-form/form.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin-signup/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLogInComponent implements OnInit {
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
  this.formService.loginAdmin(this.admin).subscribe(
    (data) => {this.router.navigate(['index']); },
    (err) => {this.clicked = false; this.errorMsg = true; }
    );
}

}
