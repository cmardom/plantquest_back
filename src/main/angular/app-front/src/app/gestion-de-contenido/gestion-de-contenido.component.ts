import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {Usuario} from "../interfaces/usuario";
import {PlantaService} from "../services/planta.service";
import {Planta} from "../interfaces/planta-interface";
import {BlogService} from "../services/blog.service";
import {Blog} from "../interfaces/blog";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-gestion-de-contenido',
  standalone: true,
  imports: [NgIf, NgForOf, SlicePipe, RouterLink],
  templateUrl: './gestion-de-contenido.component.html',
  styleUrl: './gestion-de-contenido.component.scss'
})
export class GestionDeContenidoComponent implements OnInit{
  usuarios: Usuario[] = [];
  plantas: Planta[] = [];
  blogs: Blog[] = [];

  constructor(public usuarioService: UsuarioService,
              public plantaService: PlantaService,
              public blogService: BlogService) {}

  ngOnInit() {
    this.loadPlantas();
    this.loadBlogs();
  }

  loadPlantas() {
    this.plantaService.getPlantas().subscribe({
      next: (plantas: Planta[]) => {
        this.plantas = plantas; // Store the data in plantas array

      },
      error: (error) => {
        console.error('Error fetching plantas:', error);

      },
    });
  }


  loadBlogs() {
    this.blogService.getBlogs().subscribe({
      next: (blogs: Blog[]) => {
        this.blogs = blogs; // Store the data in plantas array

      },
      error: (error) => {
        console.error('Error fetching blogs:', error);

      },
    });
  }




}
