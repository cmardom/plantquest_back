import {Component, Input, OnInit} from '@angular/core';
import {PlantaService} from "../services/planta.service";
import {Planta} from "../interfaces/planta-interface";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {VolverComponent} from "../volver/volver.component";
import {UsuarioService} from "../services/usuario.service";
import {ColeccionService} from "../services/coleccion.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-planta',
  standalone: true,
  imports: [
    VolverComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './planta.component.html',
  styleUrl: './planta.component.scss'
})
export class PlantaComponent implements OnInit{

  idPlanta: number = -1;
  plantaClicada: Planta | undefined;


  constructor(private plantaService: PlantaService,
              private route:ActivatedRoute,
              private usuarioService: UsuarioService,
              private coleccionService: ColeccionService) {  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPlanta = +params['id'];
    });

    this.plantaService.getOnePlanta(this.idPlanta)
      .subscribe(plantaBD => {
        this.plantaClicada = plantaBD;
      });

    const user= this.usuarioService.usuario;
    if (user){

      const colecciones = this.coleccionService.getColecciones(user);

      //necesito otro metodo para ver a que coleccion quiere a;adir la planta

      console.log(colecciones)


        // this.usuarioService.addPlantaToColeccion(colecciones?.id, this.plantaClicada?.id).subscribe({
        //   next: (updatedColeccion) => {
        //     console.log('Planta added successfully:', updatedColeccion);
        //     // Optionally refresh coleccion data or navigate to another view
        //   },
        //   error: (err) => {
        //     console.error('Error adding planta to coleccion:', err);
        //   }
        // });

    }

  }






}
