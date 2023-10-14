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
  tituloFormulario:string = 'Formulario Rentabilidad'

  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private  productoService:ProductoService ) {}

}
