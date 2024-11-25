import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaFormsComponent } from './practica-forms.component';

describe('PracticaFormsComponent', () => {
  let component: PracticaFormsComponent;
  let fixture: ComponentFixture<PracticaFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticaFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
