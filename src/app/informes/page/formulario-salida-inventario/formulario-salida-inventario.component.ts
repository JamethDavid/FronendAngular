import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-salida-inventario',
  templateUrl: './formulario-salida-inventario.component.html',
  styles: [
  ]
})
export class FormularioSalidaInventarioComponent {
  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  tituloFormulario:string = 'Formulario Salida Inventario'

  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private  productoService:ProductoService ) {}


    generarInformeSalidaInventario({ fechaInicio, fechaFinal }: { fechaInicio: Date, fechaFinal: Date }) {
      const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
      const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');

      if (fechaInicioFormateada && fechaFinalFormateada) {
        this.productoService.reporteToSalidaInventarioPdf(fechaInicio, fechaFinal).subscribe((data: Blob) => {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        });
      }
    }

}

