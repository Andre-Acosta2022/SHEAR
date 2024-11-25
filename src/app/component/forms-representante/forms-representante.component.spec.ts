import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRepresentanteComponent } from './forms-representante.component';

describe('FormsRepresentanteComponent', () => {
  let component: FormsRepresentanteComponent;
  let fixture: ComponentFixture<FormsRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsRepresentanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
