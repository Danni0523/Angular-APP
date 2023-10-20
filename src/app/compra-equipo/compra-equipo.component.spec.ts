import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEquipoComponent } from './compra-equipo.component';

describe('CompraEquipoComponent', () => {
  let component: CompraEquipoComponent;
  let fixture: ComponentFixture<CompraEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraEquipoComponent]
    });
    fixture = TestBed.createComponent(CompraEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
