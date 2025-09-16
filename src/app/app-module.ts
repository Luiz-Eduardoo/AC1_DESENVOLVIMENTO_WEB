import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CalcularMedia } from './calcular-media/calcular-media';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApoliceDeSeguros } from './apolice-de-seguros/apolice-de-seguros';
import { ConversorDeTemperatura } from './conversor-de-temperatura/conversor-de-temperatura';
import { CalculadoraDeIMC } from './calculadora-de-imc/calculadora-de-imc';
import { Home } from './home/home';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    CalcularMedia,
    ApoliceDeSeguros,
    ConversorDeTemperatura,
    CalculadoraDeIMC,
    Home,
    PaginaNaoEncontrada
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
