import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.models';
import { EmpresasService } from 'src/app/services/empresas.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public empresaModelGet: Empresa;
  public empresaModelPost: Empresa;


  constructor(private _empresaService: EmpresasService) {
    this.empresaModelPost = new Empresa('','','','','','');
   }

  ngOnInit(): void {
  }


  postEmpresas(){
    this._empresaService.agregarEmpresa(this.empresaModelPost).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

}
