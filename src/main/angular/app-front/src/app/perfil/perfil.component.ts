import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Usuario } from "../interfaces/usuario";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import { UsuarioService } from "../services/usuario.service";
import { ColeccionService } from "../services/coleccion.service";
import {PlantaService} from "../services/planta.service";
import {Router, RouterLink} from "@angular/router";
import {Planta} from "../interfaces/planta-interface";
import {Coleccion} from "../interfaces/coleccion";
import {subscribe} from "node:diagnostics_channel";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    SlicePipe,
    FormsModule,
    NgIf,

  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public usuarioService: UsuarioService,
              private coleccionService: ColeccionService,
              private plantaService: PlantaService,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  async cerrarSession(){
    await this.usuarioService.logout();
    await this.router.navigate(['/home']);
  }

  colecciones: Coleccion[] = [];
  isLoading = false;
  nombrecoleccion: string = ''; // The input for the new collection's name




  ngOnInit(): void {
    this.isLoading = true;
    console.log("USUARIO>   " + this.usuarioService.usuario)

    const user= this.usuarioService.usuario;
    if (user) {


      this.coleccionService.getColecciones(user)
        .subscribe(coleccion => {
          this.colecciones = coleccion;
          this.isLoading = false;
        });
    }

  }

  onSubmit(){
    const user= this.usuarioService.usuario;
    if (user){
      if (this.nombrecoleccion && user.id) {
        const newColeccion: Coleccion = {
          nombre: this.nombrecoleccion,
          usuario_id: user.id,
          plantas: [],
        };

        // Call the service to create the new Coleccion
        this.coleccionService.createColeccion(newColeccion).subscribe({
          next: (createdColeccion) => {
            console.log('Colección creada:', createdColeccion);
            this.colecciones.push(createdColeccion);
            this.nombrecoleccion = ''; // Clear input field after submit
          },
          error: (error) => {
            console.error('Error creating Coleccion:', error);
          },
        });
      } else {
        console.log('Formulario inválido');
      }
    }

  }


}
