import { Component, OnInit } from '@angular/core';
import { ColeccionService } from '../services/coleccion.service';
import { UsuarioService } from '../services/usuario.service';
import { PlantaService } from '../services/planta.service';
import { Coleccion } from '../interfaces/coleccion';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {VolverComponent} from "../volver/volver.component";

@Component({
  selector: 'app-coleccion',
  standalone: true,
  imports: [NgForOf, NgIf, VolverComponent],
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss'],
})
export class ColeccionComponent implements OnInit {
  colecciones: Coleccion[] = [];
  selectedColeccionId: number =0;
  plantaId: number | null = null;
  errorMessage: string = '';

  constructor(
    private coleccionService: ColeccionService,
    private usuarioService: UsuarioService,
    protected plantaService: PlantaService,
    private route: ActivatedRoute,
    private router: Router// I
  ) {}

  ngOnInit() {
    const user = this.usuarioService.usuario;
    if (user) {
      this.coleccionService.getColecciones(user).subscribe((colecciones) => {
        this.colecciones = colecciones;
        console.log("COLECCIONES > "+colecciones)
      });
    }

    // @ts-ignore
    this.route.params.subscribe(params => {
      this.plantaId = +params['id'];  // + converts string to number
    });
  }

  addPlantaToColeccion(coleccionId: number | undefined) {
    console.log('Button clicked. coleccionId:', coleccionId); // Check if the method is called
    this.errorMessage = '';  // Clear previous error messages

    if (coleccionId && this.plantaId) {
      this.coleccionService.addPlantaToColeccion(coleccionId, this.plantaId).subscribe({
        next: (updatedColeccion) => {
          console.log('Planta added to Coleccion', updatedColeccion);
          this.router.navigate(['/perfil']);
        },
        error: (err) => {
          console.error('Error, ya tienes esta planta en esta colección!', err.message);
          this.errorMessage = 'Error, ya tienes esta planta en esta colección.';
        },
      });
    } else {
      console.log('Either coleccionId or plantaId is missing.');
    }
  }





}
