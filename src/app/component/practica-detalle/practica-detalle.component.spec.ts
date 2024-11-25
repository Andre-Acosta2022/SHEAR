import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaDetalleComponent } from './practica-detalle.component';

describe('PracticaDetalleComponent', () => {
  let component: PracticaDetalleComponent;
  let fixture: ComponentFixture<PracticaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
