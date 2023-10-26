import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-formulario-kardex',
  templateUrl: './formulario-kardex.component.html',
  styles: [
  ]
})
export class FormularioKardexComponent implements OnInit{

  public titulo: string = 'Formulario Kardex';
  public Productos: Producto[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Producto>(this.Productos);
  clickedRows = new Set<Producto>();
  selection = new SelectionModel<Producto>();

  constructor(private productoService:ProductoService){}
  ngOnInit(): void {
    this.getListaKardex();
  }


  getListaKardex(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.Productos = data;
      this.dataSource.data = this.Productos;
    });
  }

  handleRowClick(element : Producto): void{
    this.productoService.reporteListaToKardex(element.idProducto)
    .subscribe((data:Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
