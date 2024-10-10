import {Component, OnInit} from '@angular/core';
import {BlogComponent} from "../blog/blog.component";
import {RouterLink} from "@angular/router";
import {Planta} from "../interfaces/planta-interface";
import {PlantaService} from "../services/planta.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    BlogComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  plantas: Planta[] = [];

  ngOnInit(): void {
    this.plantaService.getPlantas()
      .subscribe(plantas => {
        this.plantas = plantas;
      });
  }

  constructor(private plantaService: PlantaService) {  }



}
