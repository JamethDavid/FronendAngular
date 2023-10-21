import { Component, OnChanges, AfterViewInit, ViewChild, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-table-kardex',
  templateUrl: './table-kardex.component.html',
  styles: []
})
export class TableKardexComponent implements AfterViewInit, OnInit{
  @Input()
  public Productos: Producto[]= [];
  @Input()
  public displayedColumns: string[] = ['referencia', 'nombre'];
  @Input()
  dataSource = new MatTableDataSource<Producto>(this.Productos);
  @Input()
  clickedRows = new Set<Producto>();
  @Input()
  selection = new SelectionModel<Producto>();
  @Output()
  rowClick: EventEmitter<Producto> = new EventEmitter<Producto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
    this.getListaKardex()

  }
  getListaKardex(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.Productos = data;
      this.dataSource.data = this.Productos;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  onRowClick(element : Producto): void{
  this.rowClick.emit(element);
}
}

