import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-volver',
  standalone: true,
  imports: [],
  templateUrl: './volver.component.html',
  styleUrl: './volver.component.scss'
})
export class VolverComponent {

    constructor(private location: Location) {
    }

  goBack(): void {
    this.location.back();  // Goes back to the previous location
  }
}
