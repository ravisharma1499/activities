import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserStatesCardComponent } from './browser-states-card.component';

describe('BrowserStatesCardComponent', () => {
  let component: BrowserStatesCardComponent;
  let fixture: ComponentFixture<BrowserStatesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserStatesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserStatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
