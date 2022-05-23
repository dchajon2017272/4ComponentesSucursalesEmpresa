import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.models';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  user: Empresa;
  
  public empresaModelGet: Empresa;
  //public empresaModelPost: Empresa;


  constructor(private _empresaService: EmpresasService,private _router: Router) {
    this.user = new Empresa(
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {
  }


  /*postEmpresas(){
    this._empresaService.agregarEmpresa(this.empresaModelPost).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }*/

  registro(){
    this._empresaService.register(this.user).subscribe({
      next: (response:any)=>{
        alert('Usuario creado correctamente, ya puedes iniciar sesión con el correo: '+ response.empresa.email)
        this._router.navigate(['/pagina-inicio']);
      },
      error: (error)=>alert(error.error.mensaje),
      
    })
  }
    
}
