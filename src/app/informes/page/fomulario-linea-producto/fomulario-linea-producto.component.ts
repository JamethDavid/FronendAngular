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

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.productoService.listaPorductoNombre()
    .subscribe(productos =>this.productos = productos);
  }
}

