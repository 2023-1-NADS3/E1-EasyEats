import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSobremesaComponent } from './criar-sobremesa.component';

describe('CriarSobremesaComponent', () => {
  let component: CriarSobremesaComponent;
  let fixture: ComponentFixture<CriarSobremesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarSobremesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarSobremesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
