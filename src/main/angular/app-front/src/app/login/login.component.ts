
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule

  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  modal: NgbModalRef | undefined;
  user = {
    username: '',
    password:
      ''
  };


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
    const user = { username: this.user.username, password: this.user.password };
    this.usuarioService.login(user).subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit() {
    this.login();
    console.log(this.user);
  }




}
