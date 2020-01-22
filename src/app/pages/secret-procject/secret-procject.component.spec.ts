import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretProcjectComponent } from './secret-procject.component';

describe('SecretProcjectComponent', () => {
  let component: SecretProcjectComponent;
  let fixture: ComponentFixture<SecretProcjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretProcjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretProcjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
