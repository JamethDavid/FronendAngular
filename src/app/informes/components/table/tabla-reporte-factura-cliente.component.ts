import { Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tabla } from '../../interfaces/Tabla.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabla-reporte-factura-cliente',
  templateUrl: './tabla-reporte-factura-cliente.component.html',
  styles: [
  ]
})
export class TablaReporteFacturaClienteComponent implements OnInit {
  @Input()
  public token:string='';
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
  @Input()
  fechaInicio: Date = new Date();
  @Input()
  fechaFinal: Date = new Date();
  @Input()
  select: string ="";
  @Output()
  rowClick: EventEmitter<Tabla> = new EventEmitter<Tabla>();
  @Output()
  informeGenerado:EventEmitter<{ fechaInicio: Date, fechaFinal: Date, tablas:Tabla }> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService,private datePipe: DatePipe){}
  ngOnInit(): void {
    this.getListaTabla()
  }

  getListaTabla(): void {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.getListaClienteId(this.token).subscribe(data => {
      this.tablas = data;
      this.dataSource.data = this.tablas;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
generarInforme(element : Tabla){
  const fechaInicioFormateada = this.fechaInicio ? this.datePipe.transform(this.fechaInicio, 'yyyy-MM-ddTHH:mm:ss') : '';
  const fechaFinalFormateada = this.fechaFinal ? this.datePipe.transform(this.fechaFinal, 'yyyy-MM-ddTHH:mm:ss') : '';

  if (fechaInicioFormateada && fechaFinalFormateada) {
    const fechaInicioDate = new Date(fechaInicioFormateada);
    const fechaFinalDate = new Date(fechaFinalFormateada);
    this.informeGenerado.emit({ fechaInicio: fechaInicioDate, fechaFinal: fechaFinalDate, tablas:element });
    }
  }

}
