import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../interfaces/usuario";
import {map, Observable} from "rxjs";
import {Coleccion} from "../interfaces/coleccion";

@Injectable({
  providedIn: 'root'
})
export class ColeccionService {

  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/colecciones';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}


  // @ts-ignore
  getColecciones(usuario:Usuario): Observable<Coleccion>{

    console.log('usuario id en getcolecciones en coleccion service: ' + usuario.id)
    if (usuario){
      // @ts-ignore
      return this.http.get<Coleccion[]>(`${this.apiUrl}/usuario?id=${usuario.id}`);    }
  }


}
