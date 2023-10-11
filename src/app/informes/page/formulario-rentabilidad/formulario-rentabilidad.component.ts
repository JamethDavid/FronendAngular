import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-rentabilidad',
  templateUrl: './formulario-rentabilidad.component.html',
  styles: [
  ]
})
export class FormularioRentabilidadComponent {
  tituloFormulario =[
    {label: 'Formulario Rentabilidad',url:'formulario-rentabilidad'},
    {label: 'Formulario Entrada Inventario',url:'formulario-entrada-inventario'},
    {label: 'Formulario salida Inventario',url:'formulario-salida-inventario'},

  ];


  constructor(private route: ActivatedRoute) {}

  getTituloDinamico() {
    const urlActual = this.route.snapshot.url.join('/'); // Obtiene la URL actual
    const titulo = this.tituloFormulario.find(item => item.url === urlActual);
    return titulo ? titulo.label : 'Formulario Genérico';
  }
}
