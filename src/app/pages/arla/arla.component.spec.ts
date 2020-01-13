import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlaComponent } from './arla.component';

describe('ArlaComponent', () => {
  let component: ArlaComponent;
  let fixture: ComponentFixture<ArlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
