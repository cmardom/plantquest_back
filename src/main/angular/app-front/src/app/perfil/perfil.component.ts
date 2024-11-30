import { Component, OnInit } from '@angular/core';
import { Usuario } from "../interfaces/usuario";
import { NgForOf, NgIf } from "@angular/common";
import { UsuarioService } from "../services/usuario.service";
import { ColeccionService } from "../services/coleccion.service";
import {PlantaService} from "../services/planta.service";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = {
    dtype: undefined,
    id: 0,
    email: "",
    nombre: "",
    password: "",
    rol: undefined,
    colecciones: []
  };

  constructor(private usuarioService: UsuarioService,
              private coleccionService: ColeccionService,
              private plantaService: PlantaService) { }

  ngOnInit(): void {
    if (this.usuarioService.getUserData()) {
      console.log('on init en perfil');

      this.usuario.nombre = <string>this.usuarioService.getNameFromLocalStorage();
      this.usuario.password = <string>this.usuarioService.getPasswordFromLocalStorage();
      this.usuario.email = <string>this.usuarioService.getEmailFromLocalStorage();

      // Log in the user and fetch collections
      this.usuarioService.login(this.usuario).subscribe({
        next: (data) => {
          console.log('User logged in:', data);
          this.usuario = { ...data };

          console.log('Usuario id before fetching colecciones:', this.usuario.id);

          // Fetch the collections
          this.coleccionService.getColecciones(this.usuario).subscribe({
            next: (colecciones) => {
              console.log('Fetched colecciones:', colecciones);

              // Check if the response is an array or an object containing collections
              if (Array.isArray(colecciones)) {
                this.usuario.colecciones = colecciones;  // If it's already an array
              } else if (colecciones && colecciones.hasOwnProperty('nombre')) {
                // If it's a single collection object, push it into the array
                this.usuario.colecciones = [colecciones];  // Wrap the single collection into an array
              } else {
                console.error('Expected colecciones to be an array or a valid object, but got:', colecciones);
                this.usuario.colecciones = [];  // Fallback to an empty array
              }





              ///POPULAR PLANTAS DE LA LISTA




            },
            error: (error) => {
              console.error('Error fetching colecciones:', error);
              this.usuario.colecciones = [];
            }
          });





        },
        error: (error) => {
          console.error('Error logging in:', error);
        }
      });
    }
  }




}
