import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoPlanComponent } from './costo-plan.component';

describe('CostoPlanComponent', () => {
  let component: CostoPlanComponent;
  let fixture: ComponentFixture<CostoPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostoPlanComponent]
    });
    fixture = TestBed.createComponent(CostoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
