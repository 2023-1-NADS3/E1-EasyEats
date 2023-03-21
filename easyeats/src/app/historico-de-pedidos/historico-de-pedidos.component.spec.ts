import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDePedidosComponent } from './historico-de-pedidos.component';

describe('HistoricoDePedidosComponent', () => {
  let component: HistoricoDePedidosComponent;
  let fixture: ComponentFixture<HistoricoDePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoDePedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoDePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
