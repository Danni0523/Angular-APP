import { Component } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-compra-equipo',
  templateUrl: './compra-equipo.component.html',
  styleUrls: ['./compra-equipo.component.css'],
})
export class CompraEquipoComponent {
  products = data.phones;

  sortProducts(criteria: string) {
    this.products.sort((a, b) => {
      if (criteria === 'name') {
        return a.Brand.localeCompare(b.Brand);
      } else if (criteria === 'brand') {
        return a.Reference.localeCompare(b.Reference);
      } else if (criteria === 'price') {
        return parseFloat(a.Price) - parseFloat(b.Price);
      }
      return 0;
    });
  }
}
