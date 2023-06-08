import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListaPage } from './eventos-lista.page';

describe('EventosListaPage', () => {
  let component: EventosListaPage;
  let fixture: ComponentFixture<EventosListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
