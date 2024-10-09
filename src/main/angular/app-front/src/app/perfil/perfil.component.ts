import { Component } from '@angular/core';
import {Usuario} from "../interfaces/usuario";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  // @ts-ignore
  usuario: Usuario = {
    dtype: undefined,
    id: undefined,
    email: "",
    nombre: "",
    password: "",
    rol: undefined
  };
}
