import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBebidasComponent } from './listar-bebidas.component';

describe('ListarBebidasComponent', () => {
  let component: ListarBebidasComponent;
  let fixture: ComponentFixture<ListarBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
