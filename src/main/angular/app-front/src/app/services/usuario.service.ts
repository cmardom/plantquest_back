import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/usuarios';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
