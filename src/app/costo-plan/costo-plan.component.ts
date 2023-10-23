// costo-plan.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costo-plan',
  templateUrl: './costo-plan.component.html',
  styleUrls: ['./costo-plan.component.css'],
})
export class CostoPlanComponent implements OnInit {
  monto: number = 0;
  cuotas: number = 0;
  pagoMensual: number = 0; // Inicializado a 0

  ngOnInit() {
    this.monto = 0;
    this.cuotas = 0;
  }

  scrollToCalculator() {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  calcularPago() {
    if (this.monto && this.cuotas) {
      this.pagoMensual = this.monto / this.cuotas;
    }
  }
}
