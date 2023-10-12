import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-rentabilidad',
  templateUrl: './formulario-rentabilidad.component.html',
  styles: [
  ]
})
export class FormularioRentabilidadComponent implements OnInit {

  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  tituloFormulario =[
    {label: 'Formulario Rentabilidad',url:'formulario-rentabilidad'},
    {label: 'Formulario Entrada Inventario',url:'formulario-entrada-inventario'},
    {label: 'Formulario salida Inventario',url:'formulario-salida-inventario'},

  ];


  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private  productoService:ProductoService ) {}
    ngOnInit(): void {
      this.generarInforme();
    }

  getTituloDinamico() {
    const urlActual = this.route.snapshot.url.join('/'); // Obtiene la URL actual
    const titulo = this.tituloFormulario.find(item => item.url === urlActual);
    return titulo ? titulo.label : 'Formulario Genérico';
  }

  generarInforme() {
    const fechaInicioFormateada = this.fechaInicio ? this.datePipe.transform(this.fechaInicio, 'yyyy-MM-ddTHH:mm:ss') : '';
    const fechaFinalFormateada = this.fechaFinal ? this.datePipe.transform(this.fechaFinal, 'yyyy-MM-ddTHH:mm:ss') : '';

    if (fechaInicioFormateada && fechaFinalFormateada) {
      const fechaInicioDate = new Date(fechaInicioFormateada);
      const fechaFinalDate = new Date(fechaFinalFormateada);

      this.productoService.reporteToEntradaInventarioPdf(fechaInicioDate, fechaFinalDate).subscribe((data:Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
    } else {
      console.log('Las fechas son nulas o inválidas.');
    }
  }
}
