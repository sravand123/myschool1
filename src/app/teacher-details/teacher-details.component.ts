import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  public teachers;
  public teacher;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.teachers = this.route.snapshot.data.teacher;
    this.teachers.forEach(element => {
          if (element._id === this.route.snapshot.params.id ) {
            this.teacher = element;
            console.log(this.teacher);
          }

    });
  }

}
