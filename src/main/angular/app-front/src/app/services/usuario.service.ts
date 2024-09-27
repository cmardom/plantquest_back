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
    return this.http.get(this.apiUrl, usuario);
  }
}
