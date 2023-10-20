import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoSmartphoneComponent } from './costo-smartphone.component';

describe('CostoSmartphoneComponent', () => {
  let component: CostoSmartphoneComponent;
  let fixture: ComponentFixture<CostoSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostoSmartphoneComponent]
    });
    fixture = TestBed.createComponent(CostoSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
