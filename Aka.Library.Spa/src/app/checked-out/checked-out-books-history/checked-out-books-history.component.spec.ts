import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedOutBooksHistoryComponent } from './checked-out-books-history.component';

describe('CheckedOutBooksHistoryComponent', () => {
  let component: CheckedOutBooksHistoryComponent;
  let fixture: ComponentFixture<CheckedOutBooksHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedOutBooksHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedOutBooksHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
