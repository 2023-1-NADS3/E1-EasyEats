import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHamburguersComponent } from './list-hamburguers.component';

describe('ListHamburguersComponent', () => {
  let component: ListHamburguersComponent;
  let fixture: ComponentFixture<ListHamburguersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHamburguersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHamburguersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
