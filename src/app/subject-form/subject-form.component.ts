import { Router } from '@angular/router';
import { FormService } from './../student-form/form.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from './subject';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {
  public subject;
  public clicked;
  public errorMsg;
  constructor(private service: FormService, private router: Router) { }

  ngOnInit() {
    this.subject = new Subject('');
    this.clicked = false;
    this.errorMsg = false;
  }
  onSubmit() {
    this.clicked = true;
    this.service.submitSubject(this.subject).subscribe(
      () => {this.router.navigate(['index']); },
      err => {this.clicked = false; this.errorMsg = true; } ,
    );
  }

}
