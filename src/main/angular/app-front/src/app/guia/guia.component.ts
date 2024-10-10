import {Component, NgModule, OnInit, Output, Provider} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Planta} from "../interfaces/planta-interface";
import {PlantaService} from "../services/planta.service";
import {NgForOf, NgIf} from "@angular/common";
import EventEmitter from "node:events";


@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.scss',
  providers: [PlantaService]
})
export class GuiaComponent implements OnInit{

  plantas: Planta[] = [];
  isLoading = false;
  // @ts-ignore
  @Output() plantaSeleccionada = new EventEmitter<number>();



  ngOnInit(): void {
    this.isLoading = true;
    this.plantaService.getPlantas()
      .subscribe(plantas => {
        this.plantas = plantas;
        this.isLoading = false;
      });
  }

  seleccionarPlanta(idPlanta: number){
    // @ts-ignore
    this.plantaSeleccionada.emit(idPlanta);
  }

  constructor(private plantaService: PlantaService) {  }


}


