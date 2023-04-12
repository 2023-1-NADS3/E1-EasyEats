import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBebidasComponent } from './criar-bebidas.component';

describe('CriarBebidasComponent', () => {
  let component: CriarBebidasComponent;
  let fixture: ComponentFixture<CriarBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
