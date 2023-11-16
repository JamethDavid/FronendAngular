import { Component,OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-fomulario-linea-producto',
  templateUrl: './fomulario-linea-producto.component.html',
  styles: [
  ]
})
export class FomularioLineaProductoComponent implements OnInit {
  public token:string='';
  public productos:Producto[] = [];
  public selectedNombre: string = "";

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.getLineaProducto();
  }
  getLineaProducto():void{
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.getListaPorductoNombre(this.token)
    .subscribe(productos =>this.productos = productos);

  }
  exportToProductoLineaPdf(nombre: string): void {
    this.productoService.reporteToLineaProductoPdf(nombre,this.token)
      .subscribe((data:Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }
}

