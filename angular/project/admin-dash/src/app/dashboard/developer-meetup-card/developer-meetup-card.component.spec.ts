import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperMeetupCardComponent } from './developer-meetup-card.component';

describe('DeveloperMeetupCardComponent', () => {
  let component: DeveloperMeetupCardComponent;
  let fixture: ComponentFixture<DeveloperMeetupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperMeetupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperMeetupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
