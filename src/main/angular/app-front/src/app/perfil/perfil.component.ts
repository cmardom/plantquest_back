import {Component, OnInit} from '@angular/core';
import {Usuario} from "../interfaces/usuario";
import {NgForOf} from "@angular/common";
import {UsuarioService} from "../services/usuario.service";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{

  // @ts-ignore
  usuario: Observable<Usuario> = {
    dtype: undefined,
    id: undefined,
    email: "",
    nombre: "",
    password: "",
    rol: undefined,
    colecciones: undefined
  };

  constructor(private usuarioService : UsuarioService){}


  ngOnInit(): void {


    // @ts-ignore
    if (this.usuarioService.getUserData()){

      console.log('on init en perfil')
      // @ts-ignore
      this.usuario.nombre = this.usuarioService.getNameFromLocalStorage();
      // @ts-ignore
      this.usuario.password = this.usuarioService.getPasswordFromLocalStorage();
      // @ts-ignore
      this.usuario.email = this.usuarioService.getEmailFromLocalStorage();




      this.usuarioService.login(this.usuario).subscribe({
        next: (data) => {
          console.log(data + " > en perfil  despues de next");
          this.usuario.nombre = data.nombre;
          this.usuario.dtype = data.dtype;
          this.usuario.id = data.id;
          this.usuario.email = data.email;
          this.usuario.password = data.password;
          this.usuario.rol = data.rol?.toString();
          this.usuario.colecciones = data.colecciones;


          console.log('data en perfil')
          console.log(data);



        },
        error: (error) => {


          console.error(error);
        }
      });


      console.log('variable usuario en perfil:')
      console.log(this.usuario);

    }


  }
}
