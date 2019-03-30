import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouchComponent } from './pouch.component';

describe('PouchComponent', () => {
  let component: PouchComponent;
  let fixture: ComponentFixture<PouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
