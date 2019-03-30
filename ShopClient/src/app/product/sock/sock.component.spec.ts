import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockComponent } from './sock.component';

describe('SockComponent', () => {
  let component: SockComponent;
  let fixture: ComponentFixture<SockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
