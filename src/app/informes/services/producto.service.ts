import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductoService {
   private baseUrl:string = environments.baseUrl;
   private baseUrlReporte:string = environments.baseUrlReporte;

  constructor(private http: HttpClient) {  }

  reporteAuxilioInventario():Observable<Blob>{
   return this.http.get(`${this.baseUrlReporte}/auxilio-inventario-pdf`, { responseType: 'blob' });;

  }
}
