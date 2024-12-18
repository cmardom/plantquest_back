import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantaComponent } from './edit-planta.component';

describe('EditPlantaComponent', () => {
  let component: EditPlantaComponent;
  let fixture: ComponentFixture<EditPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPlantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
