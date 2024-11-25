import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpresaFormsComponent } from './registrar-empresa-forms.component';

describe('RegistrarEmpresaFormsComponent', () => {
  let component: RegistrarEmpresaFormsComponent;
  let fixture: ComponentFixture<RegistrarEmpresaFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarEmpresaFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEmpresaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
