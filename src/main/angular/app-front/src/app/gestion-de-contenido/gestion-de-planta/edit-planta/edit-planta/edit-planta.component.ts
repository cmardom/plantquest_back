import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {VolverComponent} from "../../../../volver/volver.component";
import {Planta} from "../../../../interfaces/planta-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PlantaService} from "../../../../services/planta.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-planta',
  standalone: true,
  imports: [
    FormsModule,
    VolverComponent,
    NgIf,
  ],
  templateUrl: './edit-planta.component.html',
  styleUrl: './edit-planta.component.scss'
})
export class EditPlantaComponent implements OnInit{
  planta: Planta = {
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
  };


  constructor(private plantaService: PlantaService,
              private router: Router,
              private route: ActivatedRoute) {}



  ngOnInit(): void {
    // If editing an existing blog, load the blog based on the ID from the URL
    const blogId = this.route.snapshot.paramMap.get('id');
    const id = Number(blogId);
    if (id){
      this.plantaService.getOnePlanta(id).subscribe((planta:Planta) => {
        this.planta = planta;
      });
    }
  }


  onSubmit(blogForm: NgForm): void {
    if (!blogForm.valid) {
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
