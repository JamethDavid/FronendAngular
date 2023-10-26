import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabla-reporte-acomulado-venta',
  templateUrl: './tabla-reporte-acomulado-venta-producto.component.html',
  styles: [
  ]
})
export class TablaReporteAcomuladoVentaProductoComponent {
  @Input()
  public productos: Producto[] = [];
  @Input()
  public displayedColumns: string[] = ['referencia', 'nombre'];
  @Input()
  dataSource = new MatTableDataSource<Producto>(this.productos);
  @Input()
  clickedRows = new Set<Producto>();
  @Input()
  selection = new SelectionModel<Producto>();
  @Input()
  fechaInicio: Date = new Date();
  @Input()
  fechaFinal: Date = new Date();
  @Input()
  select: string ="";
  @Output()
  rowClick: EventEmitter<Producto> = new EventEmitter<Producto>();
  @Output()
  informeGenerado:EventEmitter<{ fechaInicio: Date, fechaFinal: Date, productos:Producto }> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService,private datePipe: DatePipe){}

  ngOnInit(): void {
    this.getListaProducto()
  }

  getListaProducto(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.productos = data;
      this.dataSource.data = this.productos;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
generarInforme(element : Producto){
  const fechaInicioFormateada = this.fechaInicio ? this.datePipe.transform(this.fechaInicio, 'yyyy-MM-ddTHH:mm:ss') : '';
  const fechaFinalFormateada = this.fechaFinal ? this.datePipe.transform(this.fechaFinal, 'yyyy-MM-ddTHH:mm:ss') : '';

  if (fechaInicioFormateada && fechaFinalFormateada) {
    const fechaInicioDate = new Date(fechaInicioFormateada);
    const fechaFinalDate = new Date(fechaFinalFormateada);
    this.informeGenerado.emit({ fechaInicio: fechaInicioDate, fechaFinal: fechaFinalDate, productos:element });
    }
  }


}


