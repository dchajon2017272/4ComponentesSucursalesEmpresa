import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.models';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [EmpresasService]
  
})
export class DashboardComponent implements OnInit {


  public empresaModelGet: Empresa;
  public empresaModelPost: Empresa;
  public empresaModelGetId: Empresa;

  public token;

  constructor(private _empresaService: EmpresasService) {
    this.empresaModelPost = new Empresa('','','','','','');
    this.empresaModelGetId = new Empresa('','','','','','');

    this.token = this._empresaService.obtenerToken();
   }

  
  ngOnInit(): void {
    this.getEmpresas();

  }
  
  getEmpresas() {
    
    this._empresaService.obtenerEmpresas(this.token).subscribe(
      (response)=>{
        this.empresaModelGet = response.empresas;
        console.log(this.empresaModelGet);

      },
      (error)=>{
        console.log(<any>error)
      }
    )

  }

  postEmpresas(){
    this._empresaService.agregarEmpresa(this.empresaModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getEmpresaId(idEmpresa){
    this._empresaService.obtenerEmpresaId(idEmpresa).subscribe(
      (response) => {

        this.empresaModelGetId = response.empresa;
        console.log(this.empresaModelGetId);
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  putEmpresas(){
    this._empresaService.editarEmpresa(this.empresaModelGetId).subscribe(
      (response)=>{
        
        console.log(response);
        this.getEmpresas()
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  deleteEmpresas(idEmpresa) {
    this._empresaService.eliminarEmpresa(idEmpresa).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }
}


  

 

    







