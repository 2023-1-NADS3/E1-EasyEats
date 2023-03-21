import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioFoodComponent } from './cardapio-food.component';

describe('CardapioFoodComponent', () => {
  let component: CardapioFoodComponent;
  let fixture: ComponentFixture<CardapioFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
