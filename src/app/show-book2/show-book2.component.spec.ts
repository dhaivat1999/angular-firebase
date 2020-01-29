import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBook2Component } from './show-book2.component';

describe('ShowBook2Component', () => {
  let component: ShowBook2Component;
  let fixture: ComponentFixture<ShowBook2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBook2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
