import {Component, NgModule, OnInit, Provider} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";
import {Planta} from "../interfaces/planta-interface";
import {PlantaService} from "../services/planta.service";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    NgForOf,
    NgIf
  ],
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.scss',
  providers: [PlantaService]
})
export class GuiaComponent implements OnInit{

  plantas: Planta[] = [];
  isLoading = false;


  ngOnInit(): void {
    this.isLoading = true;
    this.plantaService.getPlantas()
      .subscribe(plantas => {
        this.plantas = plantas;
        this.isLoading = false;
      });
  }

  constructor(private plantaService: PlantaService) {  }


}


