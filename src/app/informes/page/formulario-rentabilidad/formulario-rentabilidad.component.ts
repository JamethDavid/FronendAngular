import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-rentabilidad',
  templateUrl: './formulario-rentabilidad.component.html',
  styles: [
  ]
})
export class FormularioRentabilidadComponent {
  public token:string='';
  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  tituloFormulario:string = 'Formulario Rentabilidad'

  constructor(private datePipe: DatePipe,
    private  productoService:ProductoService ) {}

    generarInformeRentabilidad({ fechaInicio, fechaFinal }: { fechaInicio: Date, fechaFinal: Date }) {
      const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
      const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');
      this.token = localStorage.getItem('token') ?? 'deful';

      if (fechaInicioFormateada && fechaFinalFormateada) {
        this.productoService.reporteToRentabilidadPdf(fechaInicio, fechaFinal,this.token).subscribe((data: Blob) => {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        });
      } else {
        console.log('Las fechas son nulas o inválidas.');
      }
    }

}
