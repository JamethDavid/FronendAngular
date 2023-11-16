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
  public token:string='';
  public zonas:Zona[] = [];
  public selectedNombre: string = "";
  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.getLineaZona();
  }
  getLineaZona():void{
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.getListaZona(this.token)
    .subscribe(zonas =>this.zonas = zonas);

  }
  exportToVentaZonaPdf(nombre: string): void {
    this.productoService.reporteListaToVentaZona(nombre,this.token)
      .subscribe((data:Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }
}
