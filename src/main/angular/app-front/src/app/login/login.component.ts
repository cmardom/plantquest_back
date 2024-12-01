
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";
import {Router} from "@angular/router";
import {SigninComponent} from "../signin/signin.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SigninComponent,

  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  modal: NgbModalRef | undefined;

  public formUser = {
    email: '',
    password: '',
  };


  constructor(private modalService: NgbModal,
              private usuarioService : UsuarioService,
              private router : Router) {

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
    if (!loginForm.valid) {
      return;
    } else {
      this.usuarioService.login(this.formUser);
      // await this.router.navigate(['/perfil']);
      this.closeAllModals();
    }

  }


}
