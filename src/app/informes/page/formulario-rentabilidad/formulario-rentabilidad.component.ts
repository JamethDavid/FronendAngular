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



  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();


/*  tituloFormulario =[
    {label: 'Formulario Rentabilidad',url:'formulario-rentabilidad'},
    {label: 'Formulario Entrada Inventario',url:'formulario-entrada-inventario'},
    {label: 'Formulario salida Inventario',url:'formulario-salida-inventario'},

  ];
*/

  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private  productoService:ProductoService ) {}


 /* getTituloDinamico() {
    const urlActual = this.route.snapshot.url.join('/');
    const titulo = this.tituloFormulario.find(item => item.url === urlActual);
    return titulo ? titulo.label : 'Formulario Genérico';
  }
*/

generarInforme({ fechaInicio, fechaFinal }: { fechaInicio: Date, fechaFinal: Date }) {
  const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
  const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');

  if (fechaInicioFormateada && fechaFinalFormateada) {
    this.productoService.reporteToEntradaInventarioPdf(fechaInicio, fechaFinal).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  } else {
    console.log('Las fechas son nulas o inválidas.');
  }
}
}
