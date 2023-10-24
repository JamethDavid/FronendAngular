import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-reporte-venta-linea-producto',
  templateUrl: './reporte-venta-linea-producto-fecha.component.html',
  styles: [
  ]
})
export class ReporteVentaLineaProductoFechaComponent {
  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  tituloFormulario:string = 'Reportes ventas por linea de producto fecha'

  constructor(private datePipe: DatePipe,
    private  productoService:ProductoService ) {}


    generarInformeLineaVentaProducto({ fechaInicio, fechaFinal }: { fechaInicio: Date, fechaFinal: Date }) {
      const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
      const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');

      if (fechaInicioFormateada && fechaFinalFormateada) {
        this.productoService.reporteListaToVentaLineaProductoFecha(fechaInicio, fechaFinal).subscribe((data: Blob) => {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        });
      }
    }
}
