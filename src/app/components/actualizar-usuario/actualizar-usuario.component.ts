import { Component, OnInit } from '@angular/core';
//import {UsuarioService} from 'src/app/services/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {
  [x: string]: any;
  usuario: any;

  user;
  token;

  constructor() { }

  ngOnInit(): void {
    this.user = this['userRest'].obtenerIdentidad();
    this.token = this['userRest'].obtenerToken();
  }

  obtenerIdentidad(){
    this['userRest'].obtenerIdentidad().subscribe({
      next: (response:any)=>{
        this.user = response;
  },
  error: (err)=> alert(err.error.mensaje)
})
}

 actualizarUsuario() {
 this['userRest'].actualizarUsuario(this.user, this.user._id).subscribe({
  next: (response:any)=>{+
    localStorage.setItem('identidad', JSON.stringify(this.user));
    alert('Usuario Actualizado');
  },
  error: (err)=> alert(err.error.mensaje)
})
}
}
