import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPracticaComponent } from './listar-practica.component';

describe('ListarPracticaComponent', () => {
  let component: ListarPracticaComponent;
  let fixture: ComponentFixture<ListarPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPracticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
