import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceDeSeguros } from './apolice-de-seguros/apolice-de-seguros';
import { ConversorDeTemperatura } from './conversor-de-temperatura/conversor-de-temperatura';
import { CalculadoraDeIMC } from './calculadora-de-imc/calculadora-de-imc';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'CalcularMedia', component: CalcularMedia},
  {path: 'ApoliceDeSeguros', component: ApoliceDeSeguros},
  {path: 'ConversorDeTemperatura', component: ConversorDeTemperatura},
  {path: 'CalculadoraDeIMC', component: CalculadoraDeIMC},
  {path: '**', component: PaginaNaoEncontrada}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
