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
    console.log("email en usuarioservice.login > " + usuario.email);
    console.log("url >" + this.apiUrl)
    // @ts-ignore
    return this.http.post(this.apiUrl + "/login", usuario);
  }

  signin(usuario: Usuario): Observable<Usuario> {
    // @ts-ignore
    return this.http.post(this.apiUrl + "/signin", usuario);
  }
}
