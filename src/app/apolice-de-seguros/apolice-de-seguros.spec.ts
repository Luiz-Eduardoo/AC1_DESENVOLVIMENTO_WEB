import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceDeSeguros } from './apolice-de-seguros';

describe('ApoliceDeSeguros', () => {
  let component: ApoliceDeSeguros;
  let fixture: ComponentFixture<ApoliceDeSeguros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApoliceDeSeguros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceDeSeguros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
