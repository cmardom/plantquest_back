import {Component, NgModule, OnInit} from '@angular/core';
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
    id: 0,
    email: "",
    nombre: "",
    password: "",
    rol: undefined,
    colecciones: []
  };



  constructor(private modalService: NgbModal,
              private usuarioService : UsuarioService,
              private router: Router ) {}


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
    this.router.navigate(['/home']); // Navigate to the 'home' route
  }




}
