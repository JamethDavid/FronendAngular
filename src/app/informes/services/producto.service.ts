import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { Kardex } from '../interfaces/kardex.interface';

@Injectable({providedIn: 'root'})
export class ProductoService {
   private baseUrl:string = environments.baseUrl;
   private baseUrlReporte = environments.baseUrlReporte;

  constructor(private http: HttpClient) {  }

  getListaPorductoNombre():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/linea-producto`);
  }
  getListaKardexVendedor():Observable<Kardex[]>{
    return this.http.get<Kardex[]>(`${this.baseUrl}/lista-Kardex`);
  }
  reporteToLineaProductoPdf(nombre: string): Observable<Blob> {
    return this.http.get(`${this.baseUrlReporte}/lista-producto-pdf/${nombre}`, { responseType: 'blob'});
  }
  reporteToEntradaInventarioPdf(fechaInicio: Date, fechaFinail: Date): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/entrada-inventario-pdf/${fechaInicioFormato}/${fechaFinalFormato}`, { responseType: 'blob' });
  }
  reporteToSalidaInventarioPdf(fechaInicio: Date, fechaFinail: Date): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/salida-inventario-pdf/${fechaInicioFormato}/${fechaFinalFormato}`, { responseType: 'blob' });
  }
  reporteToRentabilidadPdf(fechaInicio: Date, fechaFinail: Date): Observable<Blob> {
    const fechaInicioFormato = fechaInicio.toISOString();
    const fechaFinalFormato = fechaFinail.toISOString();
    return this.http.get(`${this.baseUrlReporte}/producto-rentabilidad-pdf/${fechaInicioFormato}/${fechaFinalFormato}`, { responseType: 'blob' });
  }
  reporteAuxilioInventario():Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/auxilio-inventario-pdf`, { responseType: 'blob' });
  }
  reporteListaToPrecio():Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/lista-precio-pdf`, { responseType: 'blob' });
  }
  reporteListaToExistente():Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/lista-existente-pdf`, { responseType: 'blob' });
  }
  reporteListaToInventarioValorizado():Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/lista-inventario-valorizado-pdf`, { responseType: 'blob' });
  }
  reporteListaToKardex(idVendedor:string):Observable<Blob>{
    return this.http.get(`${this.baseUrlReporte}/reporte-kardex-pdf/${idVendedor}`, { responseType: 'blob' });
  }


}
