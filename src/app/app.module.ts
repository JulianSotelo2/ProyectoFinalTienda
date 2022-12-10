import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ClienteComponent } from './pages/Cliente/cliente.component';
import { ClientesComponent } from './pages/Clientes/clientes.component';
import { ReservaComponent } from './pages/Reserva/reserva.component';
import { ReservasComponent } from './pages/Reservas/reservas.component';
import { ServicioComponent } from './pages/Servicio/servicio.component';
import { ServiciosComponent } from './pages/Servicios/servicios.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';



@NgModule({
    declarations: [
        AppComponent,
        HeroeComponent,
        HeroesComponent,
        SidebarComponent,
        ClienteComponent,
    ClientesComponent,
    ReservaComponent,
    ReservasComponent,
    ServicioComponent,
    ServiciosComponent,
    HeroDetailComponent,
    AcercaComponent,
    LoginComponent,
    RegistroComponent,
    ProductosComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        
    ]
})
export class AppModule { }
