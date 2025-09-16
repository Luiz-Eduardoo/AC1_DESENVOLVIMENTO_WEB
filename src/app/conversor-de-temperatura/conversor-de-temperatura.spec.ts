import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDeTemperatura } from './conversor-de-temperatura';

describe('ConversorDeTemperatura', () => {
  let component: ConversorDeTemperatura;
  let fixture: ComponentFixture<ConversorDeTemperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorDeTemperatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorDeTemperatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
