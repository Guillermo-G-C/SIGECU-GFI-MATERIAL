import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDetailsComponent } from './eventos-details.component';

describe('EventosDetailsComponent', () => {
  let component: EventosDetailsComponent;
  let fixture: ComponentFixture<EventosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
