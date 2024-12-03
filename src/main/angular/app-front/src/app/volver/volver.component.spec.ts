import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverComponent } from './volver.component';

describe('VolverComponent', () => {
  let component: VolverComponent;
  let fixture: ComponentFixture<VolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
