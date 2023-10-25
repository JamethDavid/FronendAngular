import { Component, Input, OnInit } from '@angular/core';
import { Tabla } from '../../interfaces/Tabla.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './reporte-factura-cliente.component.html',
  styles: [
  ]
})
export class ReporteFacturaClienteComponent implements OnInit {

  public titulo: string = 'Formulario Reporte Cliente';

  public tablas: Tabla[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Tabla>(this.tablas);
  clickedRows = new Set<Tabla>();
  selection = new SelectionModel<Tabla>();
  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  constructor(private productoService: ProductoService,private datePipe: DatePipe){}
  ngOnInit(): void {

    this.getListaCliente();
  }
  getListaCliente(): void {
    this.productoService.getListaClienteId().subscribe(data => {
      this.tablas = data;
      this.dataSource.data = this.tablas;
    });
  }
    generarInforme(fechaInicio: Date, fechaFinal: Date,element:Tabla) {
      const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
      const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');
      if (fechaInicioFormateada && fechaFinalFormateada) {
        this.productoService.reporteListaToFacturaCliente(fechaInicio, fechaFinal,element.idPersona).subscribe((data: Blob) => {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        });
      }
    }

}
