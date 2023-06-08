import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfileDescripcionPage } from './desfile-descripcion.page';

describe('DesfileDescripcionPage', () => {
  let component: DesfileDescripcionPage;
  let fixture: ComponentFixture<DesfileDescripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesfileDescripcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesfileDescripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
