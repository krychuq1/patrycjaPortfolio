import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LingvoComponent } from './lingvo.component';

describe('LingvoComponent', () => {
  let component: LingvoComponent;
  let fixture: ComponentFixture<LingvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LingvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LingvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
