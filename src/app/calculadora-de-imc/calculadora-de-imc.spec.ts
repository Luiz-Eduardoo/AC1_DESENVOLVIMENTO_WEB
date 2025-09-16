import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDeIMC } from './calculadora-de-imc';

describe('CalculadoraDeIMC', () => {
  let component: CalculadoraDeIMC;
  let fixture: ComponentFixture<CalculadoraDeIMC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraDeIMC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraDeIMC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
