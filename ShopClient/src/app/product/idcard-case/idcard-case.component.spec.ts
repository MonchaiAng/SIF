import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDCardCaseComponent } from './idcard-case.component';

describe('IDCardCaseComponent', () => {
  let component: IDCardCaseComponent;
  let fixture: ComponentFixture<IDCardCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDCardCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDCardCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
