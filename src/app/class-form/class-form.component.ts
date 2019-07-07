import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormService } from '../student-form/form.service';
import { Class } from '../teacher-form/class';
@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  public class_;
  public clicked;
  public errorMsg;
  constructor(private formService: FormService , private router: Router) { }

  ngOnInit() {
        this.class_ = new Class(1);
        this.errorMsg = false;
        this.clicked = false;
  }
  onSubmit() {
    this.clicked = true;
    this.formService.submitClass(this.class_).subscribe(
      () => {this.router.navigate(['index']); },
      err => {this.clicked = false; this.errorMsg = true; } ,
    );
  }


}
