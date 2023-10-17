import { Component} from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Kardex } from '../../interfaces/kardex.interface';
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
  public kardexs: Kardex[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Kardex>(this.kardexs);
  clickedRows = new Set<Kardex>();
  selection = new SelectionModel<Kardex>();






  handleRowClick(element : Kardex): void{
    this.productoService.reporteListaToKardex(element.idProducto)
    .subscribe((data:Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
