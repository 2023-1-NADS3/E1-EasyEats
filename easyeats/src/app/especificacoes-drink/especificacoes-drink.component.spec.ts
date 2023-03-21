import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacoesDrinkComponent } from './especificacoes-drink.component';

describe('EspecificacoesDrinkComponent', () => {
  let component: EspecificacoesDrinkComponent;
  let fixture: ComponentFixture<EspecificacoesDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificacoesDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificacoesDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
