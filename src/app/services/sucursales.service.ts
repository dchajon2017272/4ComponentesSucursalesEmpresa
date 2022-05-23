import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursales } from '../models/sucursales.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public headersToken = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.obtenerToken()
  })
  public identidad;
  public token;


  constructor(public _http: HttpClient) { }

  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }
  
    return this.token;
  } 

  

  obtenerSucursales(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/sucursales', { headers: headersToken} )

  }

agregarSucursal(modeloSucursal: Sucursales): Observable<any>{
  let parametros = JSON.stringify(modeloSucursal);

  return this._http.post(this.url + '/agregarSucursal', parametros, {headers:this.headersToken})
}

obtenerSucursalId(id : String): Observable<any> {

  return this._http.get(this.url + '/sucursales/' + id, { headers: this.headersVariable })
}//pendiente


editarSucursal(modeloSucursal: Sucursales): Observable<any> {
  let parametros = JSON.stringify(modeloSucursal);

  return this._http.put(this.url + '/editarSucursal/' + modeloSucursal._id, parametros, {headers: this.headersVariable})
}

eliminarSucursal(id : String): Observable<any> {

  return this._http.delete(this.url + '/eliminarSucursal/' + id, { headers: this.headersVariable })
}
}
