import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrailButtonComponent } from './free-trail-button.component';

describe('FreeTrailButtonComponent', () => {
  let component: FreeTrailButtonComponent;
  let fixture: ComponentFixture<FreeTrailButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrailButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
