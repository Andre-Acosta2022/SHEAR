import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmpresaComponent } from './table-empresa.component';

describe('TableEmpresaComponent', () => {
  let component: TableEmpresaComponent;
  let fixture: ComponentFixture<TableEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
