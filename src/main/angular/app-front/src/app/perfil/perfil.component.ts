import { Component, OnInit } from '@angular/core';
import { Usuario } from "../interfaces/usuario";
import { NgForOf, NgIf } from "@angular/common";
import { UsuarioService } from "../services/usuario.service";
import { ColeccionService } from "../services/coleccion.service";
import {PlantaService} from "../services/planta.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgForOf,

  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent /*implements OnInit*/ {

  constructor(public usuarioService: UsuarioService,
              private coleccionService: ColeccionService,
              private plantaService: PlantaService,
              private router: Router) { }

  async cerrarSession(){
    await this.usuarioService.logout();
    await this.router.navigate(['/home']);
  }
}
