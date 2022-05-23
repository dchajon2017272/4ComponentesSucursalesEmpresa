import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosSucursales } from '../models/productos-sucursales.models';
import { Productos } from '../models/productos.models';
import { Sucursales } from '../models/sucursales.models'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductosSucursalesService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public headersToken = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.obtenerToken()
  })

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

  obtenerProductosSucursales(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/productosSucursales', { headers: headersToken} )

}

agregarProductosSucursales(modeloProductosSucursales: ProductosSucursales): Observable<any>{
  let parametros = JSON.stringify(modeloProductosSucursales);

  return this._http.post(this.url + '/agregarProductoSucursal', parametros, {headers:this.headersToken})
}

obtenerProductosSucursalesId(id : String): Observable<any> {

  return this._http.get(this.url + '/productosSucursales/' + id, { headers: this.headersToken })
}



editarProductosSucursales(modeloProductosSucursales: ProductosSucursales, modeloProductos: Productos/*, modeloSucursales: Sucursales*/): Observable<any> {
  let parametros = JSON.stringify(modeloProductosSucursales);
  

  return this._http.put(this.url + '/agregarProductoSucursal/' + modeloProductos._id, parametros, /*modeloSucursales.nombreSucursal,*/ {headers: this.headersToken})
}

simularVenta(modeloProductosSucursales: ProductosSucursales): Observable<any> {
  let parametros = JSON.stringify(modeloProductosSucursales);
  

  return this._http.put(this.url + '/simularVenta/' + modeloProductosSucursales._id, parametros, {headers: this.headersToken})
}

eliminarProductosSucursales(id : String): Observable<any> {

  return this._http.delete(this.url + '/eliminarProductosSucursales/' + id, { headers: this.headersVariable })
}



}
