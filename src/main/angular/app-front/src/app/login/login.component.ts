
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../interfaces/usuario";
import {Router, RouterLink} from "@angular/router";
import {SigninComponent} from "../signin/signin.component";
import {open} from "node:fs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    SigninComponent,

  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  // @ts-ignore
  usuario: Usuario = {
    dtype: undefined,
    id: undefined,
    email: "",
    nombre: "",
    password: "",
    rol: undefined
  };
  modal: NgbModalRef | undefined;



  constructor(private modalService: NgbModal,
              private usuarioService : UsuarioService,
              private router : Router) {

  }


  ngOnInit(): void {

    if (localStorage.getItem('username') != null){
      this.usuario.nombre = <string>localStorage.getItem('username');
      this.usuario.password = <string>localStorage.getItem('password');

    }


  }



  open(content: any)
  {
    this.modalService.open(content);
  }

  closeModal() {

    this.modalService.dismissAll();
  }


  login() {

    console.log("login correcto")
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    } else {


    console.log(this.usuario)
    this.usuarioService.login(this.usuario).subscribe({

      next: (data) => {
        console.log(data + " > despues de next");
        this.usuario.dtype = data.dtype;
        this.usuario.id = data.id;
        this.usuario.email = data.email;
        this.usuario.password = data.password;
        this.usuario.rol = data.rol?.toString();

        //localStorage
        this.usuarioService.storeUserData(data);

        this.router.navigate(['/perfil']);
        this.closeModal();

      },
      error: (error) => {

        console.error(error);
      }
    });
    }

  }


}
