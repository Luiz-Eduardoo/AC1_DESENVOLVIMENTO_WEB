import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor-de-temperatura',
  standalone: false,
  templateUrl: './conversor-de-temperatura.html',
  styleUrl: './conversor-de-temperatura.css'
})
export class ConversorDeTemperatura implements OnInit {
  ngOnInit() {
  }
  Celsius: number = 0;
  Fahrenheit: number | undefined;
  Kelvin: number | undefined;

  Converter(): void {
    this.Fahrenheit = (this.Celsius * 9/5) + 32;
    this.Kelvin = this.Celsius + 273.15;
  }
  
}
