import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/models/empresa.models';
@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {

  user;
  token;
  public empresaModelGet: Empresa;

  constructor(
    public userRest: EmpresasService
  ) { }

  ngOnInit(): void {
    this.user = this.userRest.obtenerIdentidad();
    this.token = this.userRest.obtenerToken();
  }

    updateUser(){
      this.userRest.updateUser(this.user, this.user._id).subscribe({
        next: (response:any)=>{
          localStorage.setItem('identidad', JSON.stringify(this.user));
          alert('Usuario actualizado correctamente')
        },
        error: (err)=> alert(err.error.mensaje)
        
      })
    }

 /* obtenerIdentidad(){
    this.userRest.obtenerIdentidad().subscribe({
      next: (response:any)=>{
        this.user = response;
      },
      error: (err)=> alert(err.error.mensaje),
      
    }) 
  }*/

}
