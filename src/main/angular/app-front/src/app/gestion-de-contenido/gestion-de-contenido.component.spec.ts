import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeContenidoComponent } from './gestion-de-contenido.component';

describe('GestionDeContenidoComponent', () => {
  let component: GestionDeContenidoComponent;
  let fixture: ComponentFixture<GestionDeContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDeContenidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
