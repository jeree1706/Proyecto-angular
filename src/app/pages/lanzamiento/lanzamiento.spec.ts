import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lanzamiento } from './lanzamiento';

describe('Lanzamiento', () => {
  let component: Lanzamiento;
  let fixture: ComponentFixture<Lanzamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lanzamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lanzamiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
