import { Component, OnInit, AfterViewInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Tabla } from '../../interfaces/Tabla.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input()
  public Tablas: Tabla[] = [];
  @Input()
  public displayedColumns: string[] = ['referencia', 'nombre'];
  @Input()
  dataSource = new MatTableDataSource<Tabla>(this.Tablas);
  @Input()
  clickedRows = new Set<Tabla>();
  @Input()
  selection = new SelectionModel<Tabla>();
  @Output()
  rowClick: EventEmitter<Tabla> = new EventEmitter<Tabla>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getListaClientes();
    this.getListaKardex();


  }

  getListaKardex(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.Tablas = data;
      this.dataSource.data = this.Tablas;
    });
  }
  getListaClientes(): void {
    this.productoService.getListaClienteId().subscribe(data => {
      this.Tablas = data;
      this.dataSource.data = this.Tablas;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
onRowClick(element : Tabla): void{
  this.rowClick.emit(element);
}
}

