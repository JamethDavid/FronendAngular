import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [
  ]
})
export class DatepickerComponent {

  @Input()
  fechaInicio: Date = new Date();
  @Input()
  fechaFinal: Date = new Date();

  @Output()
  informeGenerado:EventEmitter<{ fechaInicio: Date, fechaFinal: Date }> = new EventEmitter();


  constructor(private productoService: ProductoService,
    private datePipe: DatePipe,){}

    generarInformeEntradaInventario() {
      const fechaInicioFormateada = this.fechaInicio ? this.datePipe.transform(this.fechaInicio, 'yyyy-MM-ddTHH:mm:ss') : '';
      const fechaFinalFormateada = this.fechaFinal ? this.datePipe.transform(this.fechaFinal, 'yyyy-MM-ddTHH:mm:ss') : '';

      if (fechaInicioFormateada && fechaFinalFormateada) {
        const fechaInicioDate = new Date(fechaInicioFormateada);
        const fechaFinalDate = new Date(fechaFinalFormateada);

        // Emitir un evento con las fechas
        this.informeGenerado.emit({ fechaInicio: fechaInicioDate, fechaFinal: fechaFinalDate });
      } else {
        console.log('Las fechas son nulas o inválidas.');
      }
    }
  }