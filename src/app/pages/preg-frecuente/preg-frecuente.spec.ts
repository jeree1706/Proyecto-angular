import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregFrecuente } from './preg-frecuente';

describe('PregFrecuente', () => {
  let component: PregFrecuente;
  let fixture: ComponentFixture<PregFrecuente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PregFrecuente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregFrecuente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
