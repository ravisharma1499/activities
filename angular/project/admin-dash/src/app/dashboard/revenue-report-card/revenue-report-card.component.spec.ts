import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueReportCardComponent } from './revenue-report-card.component';

describe('RevenueReportCardComponent', () => {
  let component: RevenueReportCardComponent;
  let fixture: ComponentFixture<RevenueReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueReportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
