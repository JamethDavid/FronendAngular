import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Kardex } from '../../interfaces/kardex.interface';

@Component({
  selector: 'app-formulario-kardex',
  templateUrl: './formulario-kardex.component.html',
  styles: [
  ]
})
export class FormularioKardexComponent  implements OnInit {
  public kardexs:Kardex[] = [];
  public pageSize:number = 10;
  public pageIndex:number = 0;
  public totalItems: number = 0;
  public displayedColumns=['referencia','nombre']
  constructor(private productoService: ProductoService){}

ngOnInit(): void {
this.getListaKardex();
}
  getListaKardex(): void {
    this.productoService.getListaKardexVendedor()
    .subscribe(data =>this.kardexs = data);
}
onPageChange(event: any) {
  this.pageSize = event.pageSize;
  this.pageIndex = event.pageIndex;
}

}
