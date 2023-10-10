import { Component,OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interfaces';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-fomulario-linea-producto',
  templateUrl: './fomulario-linea-producto.component.html',
  styles: [
  ]
})
export class FomularioLineaProductoComponent implements OnInit {
  public productos:Producto[] = [];
  public selectedNombre: string = "";


  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.getLineaProducto();
  }

  getLineaProducto():void{
    this.productoService.listaPorductoNombre()
    .subscribe(productos =>this.productos = productos);

  }

  exportToProductoLineaPdf(nombre: string): void {
    this.productoService.reporteToLineaProductoPdf(nombre)
      .subscribe((data:Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }
}

