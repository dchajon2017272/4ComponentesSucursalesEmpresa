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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    PaginaInicioComponent,
    VerEmpresasComponent,
    ProductosComponent,
    NavBarComponent


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
