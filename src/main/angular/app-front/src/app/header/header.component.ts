import {Component, NgModule, OnInit, TemplateRef} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SigninComponent} from "../signin/signin.component";
import {Usuario} from "../interfaces/usuario";
import {UsuarioService} from "../services/usuario.service";
import {NgIf} from "@angular/common";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    LoginComponent,
    SigninComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent /*implements OnInit*/{

  constructor(private modalService: NgbModal,
              public usuarioService : UsuarioService,
              private router: Router
  ) {}

  openModal(modalRef: TemplateRef<any>)
  {
    this.modalService.open(modalRef);
  }
}
