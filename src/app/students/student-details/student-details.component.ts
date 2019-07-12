import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public students;
  public student;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.students = this.route.snapshot.data.student;
    this.students.forEach(element => {
          if (element._id === this.route.snapshot.params.id ) {
            this.student = element;
          }

    });
  }


}
