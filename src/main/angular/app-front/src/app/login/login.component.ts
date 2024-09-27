
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../interfaces/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,

  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  // @ts-ignore
  usuario: Usuario = {
    dtype: "",
    id: undefined,
    email: "",
    nombre: "",
    password: "",
    rol: ""
  };
  modal: NgbModalRef | undefined;



  constructor(private modalService: NgbModal, private usuarioService : UsuarioService) { }

  ngOnInit():
    void {
  }

  openModal() {
    this.modal = this.modalService.open(TemplateRef);
  }

  closeModal() {

    this.modalService.dismissAll();
  }


  login() {

    this.usuarioService.login(this.usuario.email).subscribe((data) => {
      this.usuario.dtype = data.dtype;
      this.usuario.id = data.id;
      this.usuario.email = data.email;
      this.usuario.password = data.password;
      this.usuario.rol = data.rol;;
    });
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }

    const usuario: Usuario = {
      dtype: "",
      id: -1,
      email: loginForm.value.email,
      nombre: "",
      password: loginForm.value.password,
      rol: ""
    };

    this.usuarioService.login(usuario.email).subscribe({
      next: (data) => {
        usuario.dtype = data.dtype;
        usuario.id = data.id;
        usuario.email = data.email;
        usuario.password = data.password;
        usuario.rol = data.rol;
      },
      error: (error) => {

        console.error(error);
      }
    });

    //this.login();
    console.log(this.usuario);
  }




}
