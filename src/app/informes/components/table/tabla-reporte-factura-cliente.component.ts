import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tabla } from '../../interfaces/Tabla.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-tabla-reporte-factura-cliente',
  templateUrl: './tabla-reporte-factura-cliente.component.html',
  styles: [
  ]
})
export class TablaReporteFacturaClienteComponent {
  @Input()
  public tablas: Tabla[] = [];
  @Input()
  public displayedColumns: string[] = ['referencia', 'nombre'];
  @Input()
  dataSource = new MatTableDataSource< Tabla>(this.tablas);
  @Input()
  clickedRows = new Set<Tabla>();
  @Input()
  selection = new SelectionModel<Tabla>();
  @Output()
  rowClick: EventEmitter<Tabla> = new EventEmitter<Tabla>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
    this.getListaTabla()
  }

  getListaTabla(): void {
    this.productoService.getListaClienteId().subscribe(data => {
      this.tablas = data;
      this.dataSource.data = this.tablas;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  onRowClick(element : Tabla): void{
  this.rowClick.emit(element);
}
}
