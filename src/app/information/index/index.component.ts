import { AllInOneService } from '../../all-in-one.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public information = [];
  public students;
  public classes;
  public subjects;
  public teachers;
  public show;
  public dataSource1;
  public dataSource2;
  displayedColumns1: string[];
  displayedColumns2: string[];

  constructor( private route: ActivatedRoute, private service: AllInOneService) { }

  ngOnInit() {
    this.show = false;
    this.students = this.route.snapshot.data.student;
    this.service.get_Index_Details().subscribe((data) => {
      this.information = data;
      this.classes = this.information[0];
      this.teachers = this.information[1];
      this.subjects = this.information[2];
      this.dataSource2 = new MatTableDataSource(this.teachers);
      this.show = true;
    });
    this.displayedColumns1 = ['position', 'name', 'class', 'roll'];
    this.displayedColumns2 = ['position', 'name', 'subject', 'phone'];

    this.dataSource1 = new MatTableDataSource(this.students);
  }

  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

}

