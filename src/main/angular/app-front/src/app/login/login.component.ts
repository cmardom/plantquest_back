
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../interfaces/usuario";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,

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



  constructor(private modalService: NgbModal, private usuarioService : UsuarioService) {

  }

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

    console.log("login correcto")
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    } else {


    console.log(this.usuario)
    this.usuarioService.login(this.usuario).subscribe({

      next: (data) => {
        console.log(data);
        this.usuario.dtype = data.dtype;
        this.usuario.id = data.id;
        this.usuario.email = data.email;
        this.usuario.password = data.password;
        this.usuario.rol = data.rol?.toString();

      },
      error: (error) => {

        console.error(error);
      }
    });
    }

  }




}
