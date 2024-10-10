import {Component, Input, OnInit} from '@angular/core';
import {PlantaService} from "../services/planta.service";
import {Planta} from "../interfaces/planta-interface";

@Component({
  selector: 'app-planta',
  standalone: true,
  imports: [],
  templateUrl: './planta.component.html',
  styleUrl: './planta.component.scss'
})
export class PlantaComponent implements OnInit{

  plantaClicada: Planta | undefined;
  constructor(private plantaService: PlantaService) {  }


  @Input() idPlantaClicada: number = 1;

  ngOnInit(): void {
    this.plantaService.getOnePlanta(this.idPlantaClicada)
      .subscribe(plantaEncontrada => {
        this.plantaClicada = plantaEncontrada;
      });
  }



}
