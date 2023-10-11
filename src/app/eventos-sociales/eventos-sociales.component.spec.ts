import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosSocialesComponent } from './eventos-sociales.component';

describe('EventosSocialesComponent', () => {
  let component: EventosSocialesComponent;
  let fixture: ComponentFixture<EventosSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
