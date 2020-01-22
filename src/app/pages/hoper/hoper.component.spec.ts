import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoperComponent } from './hoper.component';

describe('HoperComponent', () => {
  let component: HoperComponent;
  let fixture: ComponentFixture<HoperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
