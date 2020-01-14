import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndeaComponent } from './andea.component';

describe('AndeaComponent', () => {
  let component: AndeaComponent;
  let fixture: ComponentFixture<AndeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
