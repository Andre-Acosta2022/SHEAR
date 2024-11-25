import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarDocumentosComponent } from './validar-documentos.component';

describe('ValidarDocumentosComponent', () => {
  let component: ValidarDocumentosComponent;
  let fixture: ComponentFixture<ValidarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
