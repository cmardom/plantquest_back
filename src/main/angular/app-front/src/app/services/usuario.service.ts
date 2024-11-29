import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/enviroment";
import {Usuario} from "../interfaces/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/usuarios';



  constructor(private http: HttpClient) {}

  login(usuario: Usuario): Observable<Usuario> {
    // @ts-ignore
    return this.http.post(this.apiUrl + "/login", usuario);
  }

  signin(usuario: Usuario): Observable<Usuario> {
    // @ts-ignore
    return this.http.post(this.apiUrl + "/signin", usuario);
  }

  storeUserData(usuario: Usuario){
    localStorage.setItem('username', usuario.nombre);
    localStorage.setItem('password', usuario.password);
    console.log(usuario);
  }

  getUserData() {
    const username= localStorage.getItem('username');
    const password= localStorage.getItem('password');

  }


  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    return this.http.post('/logout', {});
  }
}
