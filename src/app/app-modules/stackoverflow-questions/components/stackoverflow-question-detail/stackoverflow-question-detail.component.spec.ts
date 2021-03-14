import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowQuestionDetailComponent } from './stackoverflow-question-detail.component';

describe('StackoverflowQuestionDetailComponent', () => {
  let component: StackoverflowQuestionDetailComponent;
  let fixture: ComponentFixture<StackoverflowQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackoverflowQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
