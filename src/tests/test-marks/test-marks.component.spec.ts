import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMarksComponent } from './test-marks.component';

describe('TestMarksComponent', () => {
  let component: TestMarksComponent;
  let fixture: ComponentFixture<TestMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
