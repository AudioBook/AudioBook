import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFooterComponent } from './policy-footer.component';

describe('PolicyFooterComponent', () => {
  let component: PolicyFooterComponent;
  let fixture: ComponentFixture<PolicyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
