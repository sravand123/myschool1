import { FormService } from './../student-form/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-marks',
  templateUrl: './test-marks.component.html',
  styleUrls: ['./test-marks.component.css']
})
export class TestMarksComponent implements OnInit {
  public marks;
  public rowData;
  public Information = [];
  public columnDefs;
  public id;
  public clicked;
  public errorMsg;
  constructor(private route: ActivatedRoute, private service: FormService, private router: Router) { }

  ngOnInit() {
    this.clicked = false;
    this.errorMsg = false;
    this.id = this.route.snapshot.params.id;
    this.Information = this.route.snapshot.data.marks.marks;
    this.columnDefs = [
      {headerName: 'name', field: 'name', hide: true},
      {headerName: 'class', field: 'class', hide: true},
      {headerName: 'test', field: 'test', hide: true},
      {headerName: 'Name', field: 'Name'},
      {headerName: 'Class', field: 'Class', width: 70, },
      {headerName: 'Telugu', field: 'telugu', editable: true , width: 70 , cellClass: 'number-cell'},
      {headerName: 'Hindi', field: 'hindi', editable: true, width: 70, cellClass: 'number-cell'},
      {headerName: 'English', field: 'english', editable: true, width: 70, cellClass: 'number-cell'},
      {headerName: 'Maths', field: 'maths', editable: true, width: 70, cellClass: 'number-cell'},
      {headerName: 'Natural science', field: 'natural_science', width: 120, editable: true, cellClass: 'number-cell'},
      {headerName: 'Physics', field: 'physics', editable: true, width: 70, cellClass: 'number-cell'},
      {headerName: 'Social', field: 'social', editable: true, width: 70, cellClass: 'number-cell'},
      {headerName: 'Total', field: 'total', editable: true, width: 70, cellClass: 'number-cell',
      valueGetter: function aPlusBValueGetter(params) {
        return(parseInt(params.data.telugu, 10) + parseInt(params.data.hindi, 10) +
        parseInt(params.data.english, 10) + parseInt(params.data.maths, 10) + parseInt(params.data.natural_science, 10)
        + parseInt(params.data.physics, 10) + parseInt(params.data.social, 10));
      }}
  ];
    this.rowData = [];
    if (this.Information.length === 0) {
      this.Information = this.route.snapshot.data.marks.student;
      this.Information.forEach(element2 => {
        this.rowData.push({test: this.id, name: element2._id,
          class: element2.class._id, Name: element2.name, Class: element2.class.class
          });
      });
    } else {
    this.Information.forEach(element => {
        this.rowData.push({test: element.test, Name: element.name.name,
           Class: element.class.class, name: element.name._id, class: element.class._id,
          telugu: element.telugu, hindi: element.hindi, english: element.english, maths: element.maths,
          natural_science: element.natural_science, physics: element.physics, social: element.social});
      });
    }

  }
  onSubmit() {
      this.clicked = true;
      this.service.submitMarks(this.id, this.rowData).subscribe(
        () => { this.clicked = false; },
        err => {this.clicked = false; this.errorMsg = true; } ,
      );
  }

}
