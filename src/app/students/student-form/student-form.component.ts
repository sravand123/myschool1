import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { FormService } from './form.service';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  public classes;
  public student: Student;
  public classEroor;
  public clicked;
  public errorMsg ;
  constructor(private router: Router, private route: ActivatedRoute, private formService: FormService ) { }

  ngOnInit() {
            this.classEroor = true;
            this.clicked = false;
            this.errorMsg = false;
            this.classes =  this.route.snapshot.data.class_;
            this.student = new Student('' , 'default' , null, null, '', '', null);

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
    this.formService.submitStudent(this.student).subscribe(
    () => {this.router.navigate(['index']); },
    err => {this.clicked = false; this.errorMsg = true; } ,
    );

}
}
