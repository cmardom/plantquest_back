import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {LandingComponent} from "./landing/landing.component";
import {LoginComponent} from "./login/login.component";
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbModule, RouterOutlet, FormsModule, LoginComponent, HeaderComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'app-front';

  constructor(private modalService: NgbModal) {
  }

  open(content: any){
    this.modalService.open(content);
  }
}
