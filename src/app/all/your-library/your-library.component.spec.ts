import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLibraryComponent } from './your-library.component';

describe('YourLibraryComponent', () => {
  let component: YourLibraryComponent;
  let fixture: ComponentFixture<YourLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
