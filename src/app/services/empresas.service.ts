import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.models';
@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url: String ='http//localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-type', 'application/json');

  constructor(public _http: HttpClient) { }

  obtenerEmpresas(): Observable<any>{

      return this._http.get(this.url+'/empresas', { headers: this.headersVariable} )

  }

  agregarEmpresa(modeloEmpresa: Empresa): Observable<any>{
    let parametros = JSON.stringify(modeloEmpresa);

    return this._http.post(this.url + '/agregarEmpresas', parametros, {headers:this.headersVariable})
  }
  
}
