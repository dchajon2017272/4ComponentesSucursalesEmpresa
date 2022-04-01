import { Component, OnInit } from '@angular/core';
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


  constructor(private _empresaService: EmpresasService) {
    this.empresaModelPost = new Empresa('','','','','','',0,'');



   }

  
  ngOnInit(): void {
    this.getEmpresas();

  }
  getEmpresas() {
    
    this._empresaService.obtenerEmpresas().subscribe(
      (response)=>{
        this.empresaModelGet = response.empresa;
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
}


  

 

    







