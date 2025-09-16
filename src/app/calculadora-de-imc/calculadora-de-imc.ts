import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-de-imc',
  standalone: false,
  templateUrl: './calculadora-de-imc.html',
  styleUrl: './calculadora-de-imc.css'
})
export class CalculadoraDeIMC implements OnInit {
  Peso: number = 0;
  Altura: number = 0;
  resultado: string | undefined;

  ngOnInit() {
  }

  calcularIMC(): void {
    const IMC = this.Peso / (this.Altura * this.Altura);
    if (IMC < 18.5) {
      this.resultado = 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC < 24.9) {
      this.resultado = 'Peso normal';
    } else if (IMC >= 25 && IMC < 29.9) {
      this.resultado = 'Sobrepeso';
    } else if (IMC >= 30 && IMC < 34.9) {
      this.resultado = 'Obesidade grau 1';
    } else if (IMC >= 35 && IMC < 39.9) {
      this.resultado = 'Obesidade grau 2';
    } else {
      this.resultado = 'Obesidade grau 3';
}
}
}