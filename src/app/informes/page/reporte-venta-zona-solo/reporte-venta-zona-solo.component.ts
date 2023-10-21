import { Component } from '@angular/core';
import { Zona } from '../../interfaces/zona.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-reporte-venta-zona-solo',
  templateUrl: './reporte-venta-zona-solo.component.html',
  styles: [
  ]
})
export class ReporteVentaZonaSoloComponent {
  public zonas:Zona[] = [];
  public selectedNombre: string = "";
  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.getLineaZona();
  }
  getLineaZona():void{
    this.productoService.getListaZona()
    .subscribe(zonas =>this.zonas = zonas);

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
