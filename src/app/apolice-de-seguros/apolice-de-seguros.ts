import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice-de-seguros',
  standalone: false,
  templateUrl: './apolice-de-seguros.html',
  styleUrl: './apolice-de-seguros.css'
})
export class ApoliceDeSeguros implements OnInit {
  Nome: string | undefined;
  Sexo: string | undefined;
  Idade: number = 0;
  ValorAutomovel: number = 0;
  resultado: number | undefined;
  Apolice: number | undefined;

  ngOnInit() {

  }

  exibirResultado(): void {
    if (this.Sexo === 'Masculino' && this.Idade <= 25) {
      this.resultado = this.ValorAutomovel * 0.15;
    } else if (this.Sexo === 'Masculino' && this.Idade > 25) {
      this.resultado = this.ValorAutomovel * 0.1;
    } else if (this.Sexo === 'Feminino') {
      this.resultado = this.ValorAutomovel * 0.08;
    } else {
    }

  }
}
