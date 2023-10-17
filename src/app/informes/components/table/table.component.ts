import { Component, OnInit, AfterViewInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Kardex } from '../../interfaces/kardex.interface';
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
  public kardexs: Kardex[] = [];
  @Input()
  public displayedColumns: string[] = ['referencia', 'nombre'];
  @Input()
  dataSource = new MatTableDataSource<Kardex>(this.kardexs);
  @Input()
  clickedRows = new Set<Kardex>();
  @Input()
  selection = new SelectionModel<Kardex>();

  @Output()
  rowClick: EventEmitter<Kardex> = new EventEmitter<Kardex>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getListaKardex();
  }

  getListaKardex(): void {
    this.productoService.getListaKardexVendedor().subscribe(data => {
      this.kardexs = data;
      this.dataSource.data = this.kardexs;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
 /* onRowClick(element : Kardex): void{
    this.productoService.reporteListaToKardex(element.idProducto)
    .subscribe((data:Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
*/
onRowClick(element : Kardex): void{
  this.rowClick.emit(element);
}
}

