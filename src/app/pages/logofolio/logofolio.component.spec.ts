import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogofolioComponent } from './logofolio.component';

describe('LogofolioComponent', () => {
  let component: LogofolioComponent;
  let fixture: ComponentFixture<LogofolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogofolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
