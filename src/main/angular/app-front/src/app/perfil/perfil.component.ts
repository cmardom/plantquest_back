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

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    SlicePipe,

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


}
