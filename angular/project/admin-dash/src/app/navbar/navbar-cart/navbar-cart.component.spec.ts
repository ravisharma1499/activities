import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCartComponent } from './navbar-cart.component';

describe('NavbarCartComponent', () => {
  let component: NavbarCartComponent;
  let fixture: ComponentFixture<NavbarCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
