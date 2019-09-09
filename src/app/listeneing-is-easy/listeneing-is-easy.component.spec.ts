import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeneingIsEasyComponent } from './listeneing-is-easy.component';

describe('ListeneingIsEasyComponent', () => {
  let component: ListeneingIsEasyComponent;
  let fixture: ComponentFixture<ListeneingIsEasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeneingIsEasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeneingIsEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
