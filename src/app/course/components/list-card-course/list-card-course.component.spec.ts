import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardCourseComponent } from './list-card-course.component';

describe('ListCardCourseComponent', () => {
  let component: ListCardCourseComponent;
  let fixture: ComponentFixture<ListCardCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
