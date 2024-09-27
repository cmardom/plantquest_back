import {Component, NgModule} from '@angular/core';
import {Routes, RouterModule, RouterLink, RouterOutlet} from '@angular/router';
import {LandingComponent} from "../landing/landing.component";
import {GuiaComponent} from "../guia/guia.component";
import {routes} from "../app.routes";
import {open} from "node:fs";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {

  protected readonly open = open;
  protected readonly LoginComponent = LoginComponent;
}
