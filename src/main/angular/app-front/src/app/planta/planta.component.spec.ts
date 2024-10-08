import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaComponent } from './planta.component';

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
