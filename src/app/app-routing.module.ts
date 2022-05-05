import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerEmpresasComponent } from './components/ver-empresas/ver-empresas.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'pagina-inicio', component: PaginaInicioComponent },
  { path: 'productos',component: ProductosComponent},
  { path: 'verEmpresas/:idEmpresa', component: VerEmpresasComponent },
  { path: 'actualizarUsuario/:idUsuario', component: ActualizarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
