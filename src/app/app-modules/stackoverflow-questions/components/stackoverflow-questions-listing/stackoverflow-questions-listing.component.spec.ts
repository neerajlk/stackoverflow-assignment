import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowQuestionsListingComponent } from './stackoverflow-questions-listing.component';

describe('StackoverflowQuestionsListingComponent', () => {
  let component: StackoverflowQuestionsListingComponent;
  let fixture: ComponentFixture<StackoverflowQuestionsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackoverflowQuestionsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowQuestionsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
