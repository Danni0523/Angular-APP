import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCostosComponent } from './consultar-costos.component';

describe('ConsultarCostosComponent', () => {
  let component: ConsultarCostosComponent;
  let fixture: ComponentFixture<ConsultarCostosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCostosComponent]
    });
    fixture = TestBed.createComponent(ConsultarCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
