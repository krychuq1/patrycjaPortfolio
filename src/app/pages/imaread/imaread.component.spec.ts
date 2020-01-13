import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImareadComponent } from './imaread.component';

describe('ImareadComponent', () => {
  let component: ImareadComponent;
  let fixture: ComponentFixture<ImareadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImareadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImareadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
