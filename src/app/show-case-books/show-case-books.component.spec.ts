import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaseBooksComponent } from './show-case-books.component';

describe('ShowCaseBooksComponent', () => {
  let component: ShowCaseBooksComponent;
  let fixture: ComponentFixture<ShowCaseBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCaseBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
