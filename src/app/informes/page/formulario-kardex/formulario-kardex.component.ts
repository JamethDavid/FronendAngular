import { Component} from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Tabla } from '../../interfaces/Tabla.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-formulario-kardex',
  templateUrl: './formulario-kardex.component.html',
  styles: [
  ]
})
export class FormularioKardexComponent{
  constructor(private productoService:ProductoService){}
  public titulo: string = 'Formulario Kardex';
  public Tablas: Tabla[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Tabla>(this.Tablas);
  clickedRows = new Set<Tabla>();
  selection = new SelectionModel<Tabla>();



  handleRowClick(element : Tabla): void{
    this.productoService.reporteListaToKardex(element.idProducto)
    .subscribe((data:Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
