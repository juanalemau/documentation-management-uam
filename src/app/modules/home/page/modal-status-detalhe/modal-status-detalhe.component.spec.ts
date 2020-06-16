import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStatusDetalheComponent } from './modal-status-detalhe.component';

describe('ModalStatusDetalheComponent', () => {
  let component: ModalStatusDetalheComponent;
  let fixture: ComponentFixture<ModalStatusDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStatusDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStatusDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
