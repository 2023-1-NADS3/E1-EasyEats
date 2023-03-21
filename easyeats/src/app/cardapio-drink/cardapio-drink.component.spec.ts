import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioDrinkComponent } from './cardapio-drink.component';

describe('CardapioDrinkComponent', () => {
  let component: CardapioDrinkComponent;
  let fixture: ComponentFixture<CardapioDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
