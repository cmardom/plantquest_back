import {Component, NgModule, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
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
    RouterOutlet,
    LoginComponent,
    SigninComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent implements OnInit{
  usuario: Usuario = {
    dtype: undefined,
    id: undefined,
    email: "",
    nombre: "",
    password: "",
    rol: undefined
  };



  constructor(private modalService: NgbModal, private usuarioService : UsuarioService) {}


  ngOnInit(): void {


    // @ts-ignore
    if (this.usuarioService.getUserData()){
      // @ts-ignore
      this.usuario.nombre = this.usuarioService.getNameFromLocalStorage();
      // @ts-ignore
      this.usuario.password = this.usuarioService.getPasswordFromLocalStorage();

      this.usuarioService.login(this.usuario);

      console.log('variable usuario en header:')
      console.log(this.usuario);

    }


  }

  reload(){
    window.location.reload();
  }

  open(content: any)
  {
    this.modalService.open(content);
  }

  logout(){
    this.usuarioService.logout();
    this.reload();
  }




}
