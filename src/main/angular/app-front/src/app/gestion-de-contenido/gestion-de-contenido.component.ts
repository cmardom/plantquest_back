import { Component } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gestion-de-contenido',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gestion-de-contenido.component.html',
  styleUrl: './gestion-de-contenido.component.scss'
})
export class GestionDeContenidoComponent {
  constructor(public usuarioService: UsuarioService) {}
}
