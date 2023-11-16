import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-entrada-inventario',
  templateUrl: './formulario-entrada-inventario.component.html',
  styles: [
  ]
})
export class FormularioEntradaInventarioComponent {
  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private  productoService:ProductoService ) {}
    public token:string='';
    fechaInicio: Date = new Date();
    fechaFinal: Date = new Date();
    tituloFormulario: string='Formulario Entrada Inventario'


  generarInformeEntradaInventario({ fechaInicio, fechaFinal }: { fechaInicio: Date, fechaFinal: Date }) {
    const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
    const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');
    this.token = localStorage.getItem('token') ?? 'deful';

    if (fechaInicioFormateada && fechaFinalFormateada) {
      this.productoService.reporteToEntradaInventarioPdf(fechaInicio, fechaFinal,this.token).subscribe((data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
    } else {
      console.log('Las fechas son nulas o inválidas.');
    }
  }
}

