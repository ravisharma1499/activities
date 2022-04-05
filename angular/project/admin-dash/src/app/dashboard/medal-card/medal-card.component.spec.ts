import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalCardComponent } from './medal-card.component';

describe('MedalCardComponent', () => {
  let component: MedalCardComponent;
  let fixture: ComponentFixture<MedalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
