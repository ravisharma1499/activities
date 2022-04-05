import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTableCardComponent } from './company-table-card.component';

describe('CompanyTableCardComponent', () => {
  let component: CompanyTableCardComponent;
  let fixture: ComponentFixture<CompanyTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
