import { Teacher } from './../teacher-form/teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../student-form/form.service';


@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {
  public teachers;
  public selectedId;
  public selectedTeacher;
  public teacher;
  public subjectError;
  public clicked;
  public errorMsg;
  public classes;
  public subjects;

  constructor( private route: ActivatedRoute , private formService: FormService, private router: Router) { }

  ngOnInit() {
    this.subjectError = false;
    this.errorMsg = false;
    this.clicked = false;
    this.teachers = this.route.snapshot.data.teacher;
    this.classes = this.route.snapshot.data.class_;
    this.subjects = this.route.snapshot.data.subject;
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedId = id;
    this.teachers.forEach(element => {
      if ( this.selectedId === element._id ) {
            this.selectedTeacher = element;
      }
    });

    this.teacher = new Teacher(this.selectedTeacher.name, this.selectedTeacher.class._id, this.selectedTeacher.subject._id,
      this.selectedTeacher.phone, this.selectedTeacher.email);
    this.teacher.Class = [];
    this.selectedTeacher.class.forEach(element => {
        this.teacher.Class.push(element._id);
    });
    this.teacher.name = this.selectedTeacher.name;
    this.teacher.subject = this.selectedTeacher.subject._id;
    this.teacher.phone = this.selectedTeacher.phone;
    this.teacher.email = this.selectedTeacher.email;


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
    this.formService.updateTeacher(this.teacher, this.selectedId).subscribe(
      () => {this.router.navigate(['teachers', this.selectedId]); },
      err => {this.clicked = false; this.errorMsg = true; } ,
    );

  }


}
