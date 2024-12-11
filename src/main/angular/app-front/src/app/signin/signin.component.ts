import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {Router} from "@angular/router";
import {Usuario} from "../interfaces/usuario";
import {NgIf} from "@angular/common";

export type SignInDataType = Pick<Usuario, "nombre" | "email" | "password">;

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent{

  public usuario  = {
    nombre: '',
    email: '',
    password: ''
  };

  signinError=undefined;

  constructor(private modalService: NgbModal,
              private usuarioService : UsuarioService,
              private router : Router) {

  }

  closeModal() {
    this.modalService.dismissAll();
  }


  async onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    } else {
      (await this.usuarioService.signin(this.usuario)).subscribe({
        next: (usuario:Usuario)=>{

          this.usuarioService.setUser(usuario);
          this.closeModal();

        },
        error: (error: undefined)=>{
          this.signinError=error;
          loginForm.reset();
        }
      });
    }
  }
}
