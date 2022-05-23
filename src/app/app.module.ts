import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from '@rinminase/ng-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';
import { VerEmpresasComponent } from './components/ver-empresas/ver-empresas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { VerSucursalesComponent } from './components/ver-sucursales/ver-sucursales.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { GraficaComponent } from './components/grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    PaginaInicioComponent,
    VerEmpresasComponent,
    ProductosComponent,
    NavBarComponent,
    InicioAdminComponent,
    SucursalesComponent,
    ActualizarUsuarioComponent,
    VerSucursalesComponent,
    ProductosSucursalesComponent,
    GraficaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
