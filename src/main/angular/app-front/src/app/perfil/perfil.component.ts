import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Usuario } from "../interfaces/usuario";
import {DOCUMENT, isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
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
              private router: Router,
              @Inject(PLATFORM_ID) private platformId: object,
              @Inject(DOCUMENT) private document: Document
  ) { }


  async cerrarSession(){
    await this.usuarioService.logout();
    await this.router.navigate(['/home']);
  }

  toggleEdit = () => {
    if(isPlatformBrowser(this.platformId) && this.document){
      // this.document.querySelector('.usuario-form').classList.toggle('editando');
      const usuarioForm = this.document.querySelector('.usuario-form');
      if(usuarioForm && usuarioForm instanceof HTMLElement){
        usuarioForm.classList.toggle('editando');
      }
    }

  }
}
