import { Component, OnInit} from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { LoginService } from '../../../auth/pages/services/login.service';
import { Router } from '@angular/router';
import { RestResponse } from '../../interfaces/RestResponse.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit{
  usuario:string =""
  public token:string='';

  public menuListInformeInventario =[
    {label: 'Reporte lista de precios',action: () => this.reporteListaToPrecio()},
    {label: 'Reporte existencias',action: () => this.reporteListaToExistente()},
    {label: 'Reporte linea producto',url:'formulario-linea-producto'},
    {label: 'Reporte inventario valorizado',action: () => this.reporteListaToInventarioValorizaso()},
    {label: 'Reporte kardex inventario',url:'formulario-kardex'},
    {label: 'Reporte auxiliar inventario', action: () => this.reporteAuxilioInventario()},
    {label: 'informe rentabilidad',url:'formulario-rentabilidad'},
    {label: 'informe entrada de inventario',url:'formulario-entrada-inventario'},
    {label: 'informe salida de inventario',url:'formulario-salida-inventario'},
  ]

  public menuListInformeContable=[
    {label: 'Declaracion de prestaciones',url:''},
    {label: 'Provision de impuestos',url:''},
    {label: 'Movimientos cuentas auxiliares',url:''},
    {label: 'Libros oficiales',url:''},
    {label: 'Estados financieros basicos',url:''},
  ]
  public menuListInformesFacturacionPos=[
    {label: 'Reporte factura cliente',url:'reporte-informe-cliente'},
    {label: 'Reporte venta por linea de producto fecha',url:'reporte-venta-linea-producto-fecha'},
    {label: 'Reporte ventas por linea de producto solo',url:''},
    {label: 'Reporte ventas por zona fecha',action: () => this.reporteVentaZonaFecha()},
    {label: 'Reporte ventas por zona fecha solo',url:'reporte-ventas-zona-solo'},
    {label: 'Reporte acumulado ventas por producto',url:'formulario-reporte-acomulado-venta-producto'},
    {label: 'Reporte pedidos pendientes por factura',action:() => this.reportePedidoPendiente()},
  ]

  constructor(private productoService:ProductoService,private loginService:LoginService,private router:Router){}
  ngOnInit(): void {
  }


  private generarYDescargarPDF(data: any, nombreArchivo: string): void {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  reporteAuxilioInventario() {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.reporteAuxilioInventario(this.token).subscribe((data) => {
      this.generarYDescargarPDF(data, 'reporte-auxilio-inventario.pdf');
    });
  }
  reporteListaToPrecio() {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.reporteListaToPrecio(this.token).subscribe((data) => {
      this.generarYDescargarPDF(data, 'reporte-lista-precio.pdf');
    });
  }
  reporteListaToExistente() {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.reporteListaToExistente(this.token).subscribe((data) => {
      this.generarYDescargarPDF(data, 'reporte-lista-existente.pdf');
    });
  }
  reporteListaToInventarioValorizaso() {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.reporteListaToInventarioValorizado(this.token).subscribe((data) => {
      this.generarYDescargarPDF(data, 'reporte-lista-inventario-valorizado.pdf');
    });
  }
  reporteVentaZonaFecha() {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.reporteVentaZonaFecha(this.token).subscribe((data) => {
      this.generarYDescargarPDF(data, 'reporte-venta-zona-fecha.pdf');
    });
  }
  reportePedidoPendiente() {
    this.token = localStorage.getItem('token') ?? 'deful';
    this.productoService.reportePedidoPendiente(this.token).subscribe((data) => {
      this.generarYDescargarPDF(data, 'reporte-pedido-pendiente.pdf');
    });
  }
  logout(): void {
    this.token = localStorage.getItem("token")?? ''
    this.loginService.cerrarSesion(this.token).subscribe(res => {
      console.log("token: "+this.token);
      console.log("RESPONSE: "+res.message);
    }, (errorServicio) => {
      console.log('ERROR: ' + JSON.stringify(errorServicio));
    });

    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }
    /*
    this.token = localStorage.getItem('token') ?? 'deful';
    this.loginService.cerrarSesion(this.token).subscribe({
      next: (res: RestResponse) => {
        console.log("toke:" +this.token )
        console.log("RESPONSE: " + res.message);
        this.router.navigate(['login']);
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
      },
      error: (errorServicio) => {
        console.log('ERROR: ' + JSON.stringify(errorServicio));
        this.router.navigate(['login']);
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
      }
    });
  }
*/
}

