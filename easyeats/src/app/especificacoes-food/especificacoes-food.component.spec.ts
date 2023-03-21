import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacoesFoodComponent } from './especificacoes-food.component';

describe('EspecificacoesFoodComponent', () => {
  let component: EspecificacoesFoodComponent;
  let fixture: ComponentFixture<EspecificacoesFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificacoesFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificacoesFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
