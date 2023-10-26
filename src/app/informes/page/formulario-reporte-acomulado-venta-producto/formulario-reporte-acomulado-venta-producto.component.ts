import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../../services/producto.service';
import { DatePipe } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-formulario-reporte-acomulado-venta-producto',
  templateUrl: './formulario-reporte-acomulado-venta-producto.component.html',
  styles: [
  ]
})
export class FormularioReporteAcomuladoVentaProductoComponent implements OnInit{
  public titulo: string = 'Formulario Reporte Cliente';

  public productos: Producto[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Producto>(this.productos);
  clickedRows = new Set<Producto>();
  selection = new SelectionModel<Producto>();
  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  constructor(private productoService: ProductoService,private datePipe: DatePipe){}
  ngOnInit(): void {

    this.getListaProducto();
  }
  getListaProducto(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.productos = data;
      this.dataSource.data = this.productos;
    });
  }
    generarInforme(fechaInicio: Date, fechaFinal: Date,element:Producto) {
      const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-ddTHH:mm:ss');
      const fechaFinalFormateada = this.datePipe.transform(fechaFinal, 'yyyy-MM-ddTHH:mm:ss');
      if (fechaInicioFormateada && fechaFinalFormateada) {
        this.productoService.reporteListaToAcomuladoVentaProducto(fechaInicio, fechaFinal,element.idProducto).subscribe((data: Blob) => {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        });
      }
    }
}

