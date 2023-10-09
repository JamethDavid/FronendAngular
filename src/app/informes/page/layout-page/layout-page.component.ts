import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public menuListInformeInventario =[
    {label: 'Reporte lista de precios',url:''},
    {label: 'Reporte existencias',url:''},
    {label: 'Reporte linea producto',url:'formulario-linea-producto'},
    {label: 'Reporte inventario valorizado',url:''},
    {label: 'Reporte kardex inventario',url:''},
    {label: 'Reporte auxiliar inventario', action: () => this.reporteAuxilioInventario()},
    {label: 'informe rentabilidad',url:''},
    {label: 'informe entrada de inventario',url:''},
    {label: 'informe salida de inventario',url:''},
  ]

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
