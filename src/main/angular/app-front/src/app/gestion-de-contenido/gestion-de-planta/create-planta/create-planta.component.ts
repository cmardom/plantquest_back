import {Component, OnInit} from '@angular/core';
import {Planta} from "../../../interfaces/planta-interface";
import {PlantaService} from "../../../services/planta.service";
import {Blog} from "../../../interfaces/blog";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {VolverComponent} from "../../../volver/volver.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-planta',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        VolverComponent,
        NgIf
    ],
  templateUrl: './create-planta.component.html',
  styleUrl: './create-planta.component.scss'
})
export class CreatePlantaComponent implements OnInit{
  planta:Planta = {
    id: 0,
    nombre_cientifico: "",
    nombre_comun: "",
    riego: "",
    iluminacion: "",
    humedad: "",
    temperatura: "",
    localizacion: "",
    toxicidad: "",
    abono: "",
    info: "",
    imagePath: "",
    coleccion_id: 0
  }

  constructor(private plantaService: PlantaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const plantaID = this.route.snapshot.paramMap.get('id');
    const id = Number(plantaID);
    if (id){
      this.plantaService.getOnePlanta(id).subscribe((planta: Planta) => {
        this.planta = planta;
      });
    }


  }

  onSubmit(plantaForm: NgForm): void {
    if (!plantaForm.valid) {
      return;
    }

    this.plantaService.savePlanta(this.planta).subscribe(
      response => {
        console.log('Planta saved successfully:', response);
        this.router.navigate(['/gestion-de-contenido']);  // Redirect after successful save
      },
      error => {
        console.error('Error saving planta:', error);
        // Handle error (e.g., show a notification to the user)
      }
    );
  }
}
