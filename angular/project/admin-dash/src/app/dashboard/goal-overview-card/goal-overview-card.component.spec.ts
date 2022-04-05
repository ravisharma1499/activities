import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalOverviewCardComponent } from './goal-overview-card.component';

describe('GoalOverviewCardComponent', () => {
  let component: GoalOverviewCardComponent;
  let fixture: ComponentFixture<GoalOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
