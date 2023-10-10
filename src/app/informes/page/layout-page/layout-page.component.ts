import { Component} from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent{


  public menuListInformeInventario =[
    {label: 'Reporte lista de precios',url:''},
    {label: 'Reporte existencias',url:''},
    {label: 'Reporte linea producto',url:'formulario-linea-producto/:nombre'},
    {label: 'Reporte inventario valorizado',url:''},
    {label: 'Reporte kardex inventario',url:''},
    {label: 'Reporte auxiliar inventario', action: () => this.reporteAuxilioInventario()},
    {label: 'informe rentabilidad',url:''},
    {label: 'informe entrada de inventario',url:''},
    {label: 'informe salida de inventario',url:''},
  ]

  public menuListInformeContable=[
    {label: 'Declaracion de prestaciones',url:''},
    {label: 'Provision de impuestos',url:''},
    {label: 'Movimientos cuentas auxiliares',url:''},
    {label: 'Libros oficiales',url:''},
    {label: 'Estados financieros basicos',url:''},
  ]
  public menuListInformesFacturacionPos=[
    {label: 'Reporte factura cliente',url:''},
    {label: 'Reporte venta por linea de producto fecha',url:''},
    {label: 'Reporte ventas por linea de producto solo',url:''},
    {label: 'Reporte ventas por zona fecha',url:''},
    {label: 'Reporte ventas por zona fecha solo',url:''},
    {label: 'Reporte acumulado ventas por producto',url:''},
    {label: 'Reporte pedidos pendientes por factura',url:''},
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
