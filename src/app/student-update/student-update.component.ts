import { Student } from './../student-form/student';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';
import { FormService } from '../student-form/form.service';


@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  public classes;
  public selectedId;
  public selectedStudent;
  public students;
  public student: Student;
  public classEroor;
  public clicked;
  public errorMsg ;
  constructor(private router: Router, private route: ActivatedRoute, private formService: FormService ) { }

  ngOnInit() {
            this.classEroor = false;
            this.clicked = false;
            this.errorMsg = false;
            const d = new Date();
            this.classes =  this.route.snapshot.data.class;
            this.selectedId = this.route.snapshot.paramMap.get('id');
            this.students = this.route.snapshot.data.student;
            this.students.filter((user) => {
              if (user._id === this.selectedId ) {
                this.selectedStudent = user;
              }
            });
            this.student = new Student(this.selectedStudent.name, this.selectedStudent.class._id,
              this.selectedStudent.roll, this.selectedStudent.dob,
              this.selectedStudent.father_name, this.selectedStudent.mother_name, this.selectedStudent.aadhar);
  }
  validateClass(value) {
    if (value === 'default') {
         this.classEroor = true;
    } else {
      this.classEroor = false;
    }
  }
  onSubmit() {
    this.clicked = true;
    this.formService.updateStudent(this.student, this.selectedId).subscribe(
    () => {this.router.navigate(['students', this.selectedId]); },
    err => {this.clicked = false; this.errorMsg = true; } ,
    );

}
}
