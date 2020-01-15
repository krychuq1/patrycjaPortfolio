import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterChallengeComponent } from './poster-challenge.component';

describe('PosterChallengeComponent', () => {
  let component: PosterChallengeComponent;
  let fixture: ComponentFixture<PosterChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
