import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarHamburgueresComponent } from './criar-hamburgueres.component';

describe('CriarHamburgueresComponent', () => {
  let component: CriarHamburgueresComponent;
  let fixture: ComponentFixture<CriarHamburgueresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarHamburgueresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarHamburgueresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
