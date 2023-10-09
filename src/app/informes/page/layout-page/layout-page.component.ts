import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  constructor(private productoService:ProductoService){}

  reporteAuxilioInventario() {
    this.productoService.reporteAuxilioInventario().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'reporte.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
