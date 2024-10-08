import {Component, NgModule} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SigninComponent} from "../signin/signin.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    LoginComponent,
    SigninComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {
  constructor(private modalService: NgbModal) {}

  open(content: any)
  {
    this.modalService.open(content);
  }
}
