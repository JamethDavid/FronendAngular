import { Component, OnInit } from '@angular/core';
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
  public tabla: Tabla[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Tabla>(this.tabla);
  clickedRows = new Set<Tabla>();
  selection = new SelectionModel<Tabla>();
  constructor(private productoService: ProductoService){}
  ngOnInit(): void {

    this.getListaCliente();

  }
  getListaCliente(): void {
    this.productoService.getListaClienteId().subscribe(data => {
      this.tabla = data;
      this.dataSource.data = this.tabla;
    });
  }



}
