import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import {UsuarioService} from "./services/usuario.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{
  title = 'app-front';

  constructor(public usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuarioService.setUserFromLocalStorage();
  }
}
