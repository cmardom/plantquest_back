
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
    id: 0,
    email: "",
    nombre: "",
    password: "",
    rol: undefined,
    colecciones: []

  };
  modal: NgbModalRef | undefined;



  constructor(private modalService: NgbModal,
              private usuarioService : UsuarioService,
              private router : Router) {

  }


  ngOnInit(): void {
//hay que setear el item
    if (this.usuarioService.getUserData()){
      // @ts-ignore
      this.usuario.nombre = this.usuarioService.getNameFromLocalStorage();
      // @ts-ignore
      this.usuario.password = this.usuarioService.getPasswordFromLocalStorage();
      console.log('login correcto en login component');
      console.log(this.usuario);
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


    this.usuarioService.login(this.usuario);
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    } else {


      this.usuarioService.login(this.usuario).subscribe({

        next: (data) => {
          console.log(data + " > despues de next");
          this.usuario.dtype = data.dtype;
          this.usuario.id = data.id;
          this.usuario.email = data.email;
          this.usuario.password = data.password;
          this.usuario.rol = data.rol?.toString();
          this.usuario.colecciones = data.colecciones;


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
