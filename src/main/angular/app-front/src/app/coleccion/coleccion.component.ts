import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-coleccion',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './coleccion.component.html',
  styleUrl: './coleccion.component.scss'
})
export class ColeccionComponent {

}
