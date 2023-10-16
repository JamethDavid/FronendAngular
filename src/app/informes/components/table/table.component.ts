import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
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
  public titulo: string = 'Formulario Kardex';
  public kardexs: Kardex[] = [];
  public displayedColumns: string[] = ['referencia', 'nombre'];
  dataSource = new MatTableDataSource<Kardex>(this.kardexs);
  clickedRows = new Set<Kardex>();
  selection = new SelectionModel<Kardex>();

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
  onRowClick(element : Kardex): void{
    this.productoService.reporteListaToKardex(element.idProducto)
    .subscribe((data:Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}

