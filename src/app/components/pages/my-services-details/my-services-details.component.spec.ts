import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServicesDetailsComponent } from './my-services-details.component';

describe('MyServicesDetailsComponent', () => {
  let component: MyServicesDetailsComponent;
  let fixture: ComponentFixture<MyServicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServicesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
