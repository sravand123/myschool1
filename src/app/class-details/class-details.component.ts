import { AllInOneService } from './../all-in-one.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  public Information;
  public columnDefs;
  public test;
  public rowData;
  public dataSource1;
  public dataSource2;
  displayedColumns1: string[];
  displayedColumns2: string[];
  constructor( private classService: AllInOneService, private route: ActivatedRoute) { }

  ngOnInit() {

      this.Information = this.route.snapshot.data.classDetails;

      this.displayedColumns1 = ['position', 'name', 'roll'];
      this.displayedColumns2 = ['position', 'name', 'subject', 'phone'];

      this.dataSource1 = new MatTableDataSource(this.Information.student);
      this.dataSource2 = new MatTableDataSource(this.Information.teacher);
  }
  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

}
