import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSobremesaComponent } from './listar-sobremesa.component';

describe('ListarSobremesaComponent', () => {
  let component: ListarSobremesaComponent;
  let fixture: ComponentFixture<ListarSobremesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSobremesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSobremesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
