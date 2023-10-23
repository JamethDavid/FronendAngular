import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService,private datePipe: DatePipe){}
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

generarInformeCliente({ fechaInicio, fechaFinal }: { fechaInicio: Date, fechaFinal: Date }) {
  const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
  const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');

  if (fechaInicioFormateada && fechaFinalFormateada) {
    this.productoService.reporteToSalidaInventarioPdf(fechaInicio, fechaFinal).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}

}
