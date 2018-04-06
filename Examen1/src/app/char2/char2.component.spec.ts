import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Char2Component } from './char2.component';

describe('Char2Component', () => {
  let component: Char2Component;
  let fixture: ComponentFixture<Char2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Char2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Char2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
