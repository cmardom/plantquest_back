
import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {SigninComponent} from "../signin/signin.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SigninComponent,
    NgIf,

  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginError = undefined;

  public formUser = {
    email: '',
    password: '',
  };

  constructor(private modalService: NgbModal,
              private usuarioService : UsuarioService) {

  }


  ngOnInit(): void {
  }



  registerLinkClick(event: Event, content: any)
  {
    event.preventDefault();
    this.closeAllModals();
    this.modalService.open(content);
  }

  closeAllModals() {
    this.modalService.dismissAll();
  }

  async onSubmit(loginForm: NgForm) {
    // this.loginError = undefined;

    if (!loginForm.valid) {
      return;
    } else {
      this.usuarioService.login(this.formUser).subscribe({
        next: (usuario) => {
          this.usuarioService.setUser(usuario);
          this.closeAllModals();
        },
        error: (error) => {
          // @ts-ignore
          this.loginError = "El usuario o la contraseña no son correctos";
          loginForm.reset();
        }
      });
    }

  }


}
