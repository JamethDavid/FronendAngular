import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { Tabla } from '../interfaces/Tabla.interface';
import { Zona } from '../interfaces/zona.interface';

@Injectable({providedIn: 'root'})
export class ProductoService {
   private baseUrl:string = environments.baseUrl;
   private baseUrlReporte = environments.baseUrlReporte;
   private prueba:string = 'http://localhost:8081/producto';

  constructor(private http: HttpClient) {  }

  getListaPorductoNombre(token:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.prueba}/linea-producto/${token}`);
  }
  getListaKardexVendedor(token:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/lista-kardex/${token}`);
  }
  getListaZona(token:string):Observable<Zona[]>{
    return this.http.get<Zona[]>(`${this.baseUrl}/lista-zona/${token}`);
  }
  getListaClienteId(token:string):Observable<Tabla[]>{
    return this.http.get<Tabla[]>(`${this.baseUrl}/lista-cliente/${token}`);
  }

  reporteToLineaProductoPdf(nombre: string,token:string): Observable<Blob> {
    return this.http.get(`${this.baseUrlReporte}/lista-producto-pdf/${nombre}/${token}`, { responseType: 'blob'});
  }
  reporteAuxilioInventario(token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/auxilio-inventario-pdf/${token}`, { responseType: 'blob' });
  }
  reportePedidoPendiente(token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/reporte-pedido-pendiente-pdf/${token}`, { responseType: 'blob' });
  }
  reporteVentaZonaFecha(token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/reporte-zona-venta-fecha-pdf/${token}`, { responseType: 'blob' });
  }
  reporteListaToPrecio(token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/lista-precio-pdf/${token}`, { responseType: 'blob' });
  }
  reporteListaToExistente(token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/lista-existente-pdf/${token}`, { responseType: 'blob' });
  }
  reporteListaToInventarioValorizado(token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/lista-inventario-valorizado-pdf/${token}`, { responseType: 'blob' });
  }
  reporteListaToKardex(idVendedor:string,token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/reporte-kardex-pdf/${idVendedor}/${token}`, { responseType: 'blob' });
  }
  reporteListaToVentaZona(nombre:string,token:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/reporte-zona-pdf/${nombre}/${token}`, { responseType: 'blob' });
  }
  reporteListaToFacturaCliente(fechaInicio: Date, fechaFinail: Date, idPersona: string,token:string): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/reporte-cliente-pdf/${fechaInicioFormato}/${fechaFinalFormato}/${idPersona}/${token}`, { responseType: 'blob' });
  }
  reporteListaToFacturaAcomulado(fechaInicio: Date, fechaFinail: Date, idProducto: string,token:string): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/reporte-acomulado-venta-producto-pdf/${fechaInicioFormato}/${fechaFinalFormato}/${idProducto}/${token}`, { responseType: 'blob' });
  }
  reporteListaToVentaLineaProductoFecha(fechaInicio: Date, fechaFinail: Date,token:string): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/reporte-venta-linea-producto-pdf/${fechaInicioFormato}/${fechaFinalFormato}/${token}`, { responseType: 'blob' });
  }
  reporteToEntradaInventarioPdf(fechaInicio: Date, fechaFinail: Date,token:string): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/entrada-inventario-pdf/${fechaInicioFormato}/${fechaFinalFormato}/${token}`, { responseType: 'blob' });
  }
  reporteToSalidaInventarioPdf(fechaInicio: Date, fechaFinail: Date,token:string): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/salida-inventario-pdf/${fechaInicioFormato}/${fechaFinalFormato}/${token}`, { responseType: 'blob' });
  }
  reporteToRentabilidadPdf(fechaInicio: Date, fechaFinail: Date,token:string): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/producto-rentabilidad-pdf/${fechaInicioFormato}/${fechaFinalFormato}/${token}`, { responseType: 'blob' });
  }


}
