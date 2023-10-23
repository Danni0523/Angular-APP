import { Component, Renderer2,  ElementRef} from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-consultar-costos',
  templateUrl: './consultar-costos.component.html',
  styleUrls: ['./consultar-costos.component.css'],
})
export class ConsultarCostosComponent {
  phones = data.phones;
  selectedPhone: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showDetail(phone: any, index: number) {
    this.selectedPhone = phone;

    // Enfocar el elemento de detalles
    setTimeout(() => {
      const detailElement = this.el.nativeElement.querySelector(
        `#phone-detail-${index}`
      );
      if (detailElement) {
        this.renderer
          .selectRootElement(detailElement)
          .scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
