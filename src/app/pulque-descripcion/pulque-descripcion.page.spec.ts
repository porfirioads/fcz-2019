import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulqueDescripcionPage } from './pulque-descripcion.page';

describe('PulqueDescripcionPage', () => {
  let component: PulqueDescripcionPage;
  let fixture: ComponentFixture<PulqueDescripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulqueDescripcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulqueDescripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
