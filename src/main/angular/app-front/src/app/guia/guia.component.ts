import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";
import {Planta} from "../interfaces/planta-interface";
import {PlantaService} from "../services/planta.service";

@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.scss'
})
export class GuiaComponent implements OnInit{

  plantas: Planta[] = [];
  isLoading = false;

  constructor(private plantaService: PlantaService) {  }


  ngOnInit(): void {
    this.isLoading = true;
    this.plantaService.getPlantas()
      .subscribe(plantas => {
        this.plantas = plantas;
        this.isLoading = false;
      });
  }
}
