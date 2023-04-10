import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHamburgueresComponent } from './list-hamburgueres.component';

describe('ListHamburgueresComponent', () => {
  let component: ListHamburgueresComponent;
  let fixture: ComponentFixture<ListHamburgueresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHamburgueresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHamburgueresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
