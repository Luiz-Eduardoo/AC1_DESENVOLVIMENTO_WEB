import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia implements OnInit {
  resultadoTexto: string | undefined;
  resultado: string | undefined;
   ngOnInit() {
    
  }
  AC1: number = 0;
  AC2: number = 0;
  AG: number = 0;
  AF: number = 0;

  calcularMedia(): void {
    const media = (this.AC1 * 0.15 + this.AC2 * 0.30 + this.AG * 0.1 + this.AF * 0.45);
    if (media >= 5) {
      this.resultado = 'Aprovado ' + media.toFixed(2);
    } else {
      this.resultado = 'Reprovado ' + media.toFixed(2);
    }
}
}
