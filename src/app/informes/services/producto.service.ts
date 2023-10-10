import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({providedIn: 'root'})
export class ProductoService {
   private baseUrl:string = environments.baseUrl;
   private baseUrlReporte = environments.baseUrlReporte;

  constructor(private http: HttpClient) {  }

  listaPorductoNombre():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/linea-producto`);
  }
  reporteToLineaProductoPdf(nombre: string): Observable<Blob> {
    return this.http.get(`${this.baseUrlReporte}/lista-producto-pdf/${nombre}`, { responseType: 'blob'});
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

}
