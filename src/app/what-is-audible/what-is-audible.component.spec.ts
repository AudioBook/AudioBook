import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAudibleComponent } from './what-is-audible.component';

describe('WhatIsAudibleComponent', () => {
  let component: WhatIsAudibleComponent;
  let fixture: ComponentFixture<WhatIsAudibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsAudibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAudibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
