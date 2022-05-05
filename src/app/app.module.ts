import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';

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
    ActualizarUsuarioComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
