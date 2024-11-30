import {Component, Input, OnInit} from '@angular/core';
import {PlantaService} from "../services/planta.service";
import {Planta} from "../interfaces/planta-interface";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-planta',
  standalone: true,
  imports: [],
  templateUrl: './planta.component.html',
  styleUrl: './planta.component.scss'
})
export class PlantaComponent implements OnInit{

  idPlanta: number = -1;
  plantaClicada: Planta | undefined;

  constructor(private plantaService: PlantaService,
              private route:ActivatedRoute) {  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPlanta = +params['id'];
    });

    this.plantaService.getOnePlanta(this.idPlanta)
      .subscribe(plantaBD => {
        this.plantaClicada = plantaBD;
      });
  }






}
