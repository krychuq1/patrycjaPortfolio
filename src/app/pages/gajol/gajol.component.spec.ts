import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GajolComponent } from './gajol.component';

describe('GajolComponent', () => {
  let component: GajolComponent;
  let fixture: ComponentFixture<GajolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GajolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GajolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
