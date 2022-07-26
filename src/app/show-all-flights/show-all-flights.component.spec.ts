import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFlightsComponent } from './show-all-flights.component';

describe('ShowAllFlightsComponent', () => {
  let component: ShowAllFlightsComponent;
  let fixture: ComponentFixture<ShowAllFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
