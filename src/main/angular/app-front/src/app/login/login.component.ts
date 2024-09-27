
import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

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


  constructor(private modalService: NgbModal) { }

  ngOnInit():
    void {
  }

  openModal() {
    this.modal = this.modalService.open(TemplateRef);
  }

  closeModal() {

    this.modalService.dismissAll();
  }

  onSubmit() {
    // Aquí realizarías la lógica para enviar los datos del formulario al servidor
    console.log(this.user);
  }



}
