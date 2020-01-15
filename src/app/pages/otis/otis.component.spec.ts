import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtisComponent } from './otis.component';

describe('OtisComponent', () => {
  let component: OtisComponent;
  let fixture: ComponentFixture<OtisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
