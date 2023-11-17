
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';

import { UserModel } from '../interfaces/usuario.interface';
import { RestResponse } from 'src/app/informes/interfaces/RestResponse.interface';

/**
 * @description Servicio encargado de llamar a los servicios REST de Login
 * @author ALEX CALDAS
 */
@Injectable()
export class LoginService {
  private baseUrl:string = environments.baseUrl;
  private baseUrlReporte = environments.baseUrlReporte;

  /**
  * Constructor de la clase
  */
  constructor(private http: HttpClient) { }

  /**
   *  Metodo encargado de validar los campos obligatrios del front
   * @param userModel
   */
  public validate(userModel: UserModel): boolean {
    let isValid = true;
    if (!userModel.usuario) {
      isValid = false;
    }
    if (!userModel.password) {
      isValid = false;
    }
    return isValid;
  }

  /**
   * Metodo encargado de invocar el servicio REST login, para validar usuario y proceder a iniciar la sesion en el backend
   * @param userModel
   */
  public iniciarSesion(userModel: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>(this.baseUrl + '/login', JSON.stringify(userModel));
  }

 /**
   * Metodo encargado de invocar el servicio REST logout, para validar usuario y proceder a cerrar la sesion en el backend
   * @param userModel
   */
  public cerrarSesion(token: any): Observable<RestResponse> {
    return this.http.post<RestResponse>(this.baseUrl + '/logout', token);
  }
}
