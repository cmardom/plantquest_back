import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlantaComponent } from './create-planta.component';

describe('CreatePlantaComponent', () => {
  let component: CreatePlantaComponent;
  let fixture: ComponentFixture<CreatePlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
