import { Component, OnChanges, AfterViewInit, ViewChild, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Tabla } from '../../interfaces/Tabla.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements AfterViewInit, OnInit{
  @Input()
  public datos: Producto[] | Tabla[] = [];
  @Input()
  public displayedColumns: string[] = ['referencia', 'nombre'];
  @Input()
  dataSource = new MatTableDataSource< Tabla | Producto>(this.datos);
  @Input()
  clickedRows = new Set<Producto | Tabla>();
  @Input()
  selection = new SelectionModel<Producto | Tabla>();
  @Output()
  rowClick: EventEmitter<Producto | Tabla> = new EventEmitter<Producto | Tabla>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
    this.getListaKardex();
  }

  getListaKardex(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.datos = data;
      this.dataSource.data = this.datos;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  onRowClick(element : Tabla): void{
  this.rowClick.emit(element);
}
}

