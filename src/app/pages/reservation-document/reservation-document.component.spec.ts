import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDocumentComponent } from './reservation-document.component';

describe('ReservationDocumentComponent', () => {
  let component: ReservationDocumentComponent;
  let fixture: ComponentFixture<ReservationDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
