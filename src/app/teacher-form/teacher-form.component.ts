import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Teacher } from './teacher';
import { FormService } from '../student-form/form.service';
import { Class } from './class';



@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  public classes;
  public subjects;
  public classError;
  public subjectError;
  public teacher;
  public clicked;
  public errorMsg;
  constructor(private formService: FormService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.clicked = false;
    this.classError = false;
    this.errorMsg = false;
    this.teacher = new Teacher('', ['default'], 'default', null, '');
    this.teacher.subject = 'default';
    this.subjectError = false;
    this.classes = this.route.snapshot.data.class_;
    this.subjects = this.route.snapshot.data.subject;

  }
  validateClass(value) {
    if (value === 'default') {
      this.subjectError = true;
    }  else {
      this.subjectError = false;
    }
  }

  onSubmit() {
    this.clicked = true;
    this.formService.submitTeacher(this.teacher).subscribe(
    () => {this.router.navigate(['index']); },
    err => {this.clicked = false; this.errorMsg = true; } ,
    );

  }

}
