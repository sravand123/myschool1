import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  public teachers;
  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    this.teachers = this.route.snapshot.data.subjectDetails.teacher;
  }

}
