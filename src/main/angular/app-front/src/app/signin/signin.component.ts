import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit{

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

  constructor(private modalService: NgbModal, private usuarioService : UsuarioService, private router : Router) {

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


  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    } else {

      console.log(this.usuario)

      this.usuarioService.signin(this.usuario).subscribe({


        next: (response) => {
          this.router.navigate(['/home']);
          this.closeModal();

        },
        error: (error) => {

          console.error(error);
        }
      });
    }
  }
}
