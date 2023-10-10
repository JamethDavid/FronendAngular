import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({providedIn: 'root'})
export class ProductoService {
   private baseUrl:string = environments.baseUrl;
   private baseUrlReporte:string = environments.baseUrlReporte;

  constructor(private http: HttpClient) {  }

  reporteAuxilioInventario():Observable<Blob>{
   return this.http.get(`${this.baseUrlReporte}/auxilio-inventario-pdf`, { responseType: 'blob' });;
  }
  listaPorductoNombre():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/linea-producto`);
  }
}
