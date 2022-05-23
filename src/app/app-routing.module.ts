import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { VerEmpresasComponent } from './components/ver-empresas/ver-empresas.component';
import { VerSucursalesComponent } from './components/ver-sucursales/ver-sucursales.component';
import { UsuarioGuard } from './services/usuario.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'pagina-inicio', component: PaginaInicioComponent },
  { path: 'productos',component: ProductosComponent},
  { path: 'verEmpresas/:idEmpresa', component: VerEmpresasComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[UsuarioGuard]},
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'actualizarUsuario', component: ActualizarUsuarioComponent },
  { path: 'verSucursales/:idSucursal', component: VerSucursalesComponent},
  { path: 'grafica', component: GraficaComponent},
  {path: 'productos-sucursales', component: ProductosSucursalesComponent},
  {path: 'admin', component: InicioAdminComponent,children:[
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
