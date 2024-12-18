import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {Usuario} from "../interfaces/usuario";
import {PlantaService} from "../services/planta.service";
import {Planta} from "../interfaces/planta-interface";
import {BlogService} from "../services/blog.service";
import {Blog} from "../interfaces/blog";
import {Router, RouterLink} from "@angular/router";

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
              public blogService: BlogService,
              private router: Router) {}

  ngOnInit() {
    this.loadPlantas();
    this.loadBlogs();
  }

  loadPlantas() {
    this.plantaService.getPlantas().subscribe({
      next: (plantas: Planta[]) => {
        this.plantas = plantas;

      },
      error: (error) => {
        console.error('Error fetching plantas:', error);

      },
    });
  }


  loadBlogs() {
    this.blogService.getBlogs().subscribe({
      next: (blogs: Blog[]) => {
        this.blogs = blogs;

      },
      error: (error) => {
        console.error('Error fetching blogs:', error);

      },
    });
  }

  deleteBlog(id: number) {

    const confirmed = window.confirm('¿Estás seguro de borrar este blog?');

    if (confirmed) {
      this.blogService.deleteBlog(id).subscribe(
        () => {
          console.log('Blog deleted successfully');
          this.router.navigate(['/gestion-de-contenido']).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.error('Error deleting blog:', error);
        }
      );
    }
  }

  deletePlanta(id: number) {

    const confirmed = window.confirm('¿Estás seguro de borrar esta planta?');

    if (confirmed) {
      this.plantaService.deletePlanta(id).subscribe(
        () => {
          console.log('Planta deleted successfully');
          this.router.navigate(['/gestion-de-contenido']).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.error('Error deleting planta:', error);
        }
      );
    }
  }


}
