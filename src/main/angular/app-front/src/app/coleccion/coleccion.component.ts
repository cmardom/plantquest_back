import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColeccionService } from '../services/coleccion.service';
import { UsuarioService } from '../services/usuario.service';
import { PlantaService } from '../services/planta.service';
import { Coleccion } from '../interfaces/coleccion';
import { Planta } from '../interfaces/planta-interface';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss'],
})
export class ColeccionComponent implements OnInit {
  colecciones: Coleccion[] = [];
  selectedColeccionId: number =0;  // To store the selected Coleccion's ID
  plantaId: number | null = null; // The Planta ID to be added

  constructor(
    private coleccionService: ColeccionService,
    private usuarioService: UsuarioService,
    protected plantaService: PlantaService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    const user = this.usuarioService.usuario;
    if (user) {
      this.coleccionService.getColecciones(user).subscribe((colecciones) => {
        this.colecciones = colecciones;
        console.log("COLECCIONES > "+colecciones)
      });
    }
  }

  // Method to open the modal
  open(content: any, coleccionId: number) {
    this.selectedColeccionId = coleccionId;  // Set the selected coleccion
    this.modalService.open(content);  // Open the modal
  }

  // Method to add a Planta to a Coleccion
  addPlantaToColeccion() {
    if (this.selectedColeccionId && this.plantaId) {
      this.coleccionService.addPlantaToColeccion(this.selectedColeccionId, this.plantaId).subscribe({
        next: (updatedColeccion) => {
          console.log('Planta added to Coleccion', updatedColeccion);
          this.modalService.dismissAll();  // Close the modal after successful add
        },
        error: (err) => {
          console.error('Error adding planta:', err);
        },
      });
    }
  }
}
