import { Component, OnInit } from '@angular/core';
import { FormService } from '../student-form/form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from './test';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  errorMsg: boolean;
  clicked: boolean;
  public test;
  public classes;
  public classError;
  constructor(private formService: FormService , private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.errorMsg = false;
    this.clicked = false;
    this.test = new Test('', 'default');
    this.classError = true;
    this.classes = this.route.snapshot.data.class;
}
validateClass(value) {
  if (value === 'default') {
       this.classError = true;
  } else {
    this.classError = false;
  }
}
onSubmit() {
this.clicked = true;
this.formService.submitTest(this.test).subscribe(
  (data) => {this.router.navigateByUrl('tests/' + data._id);},
  (err) => {this.clicked = false; this.errorMsg = true; } ,
);
}

}
