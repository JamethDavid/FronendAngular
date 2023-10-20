import { Component, Input, OnInit } from '@angular/core';
import { Tabla } from '../../interfaces/Tabla.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductoService } from '../../services/producto.service';

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
  constructor(private productoService: ProductoService){}
  ngOnInit(): void {

    this.getListaCliente();
  }
  getListaCliente(): void {
    this.productoService.getListaClienteId().subscribe(data => {
      this.tablas = data;
      this.dataSource.data = this.tablas;
    });
  }



}
