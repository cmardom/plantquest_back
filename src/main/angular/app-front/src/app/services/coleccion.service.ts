import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../interfaces/usuario";
import {catchError, map, Observable, switchMap, throwError} from "rxjs";
import {Coleccion} from "../interfaces/coleccion";
import {UsuarioService} from "./usuario.service";
import {Planta} from "../interfaces/planta-interface";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ColeccionService {

  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/colecciones';

  public coleccion: Coleccion | undefined = undefined;
  public colecciones: Coleccion[] | undefined = undefined;
  private localStorageKey: string = 'coleccionesData';


  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object,
              private usuarioService: UsuarioService) {}




  addPlantaToColeccion(coleccionId: number, plantaId: number): Observable<Coleccion> {
    return this.http.put<Coleccion>(`${this.apiUrl}/${coleccionId}/plantas/${plantaId}`, {})
      .pipe(
        catchError((error) => {
          let errorMessage = 'An error occurred while adding the planta to the coleccion.';
          if (error.error && error.error.message) {
            errorMessage = error.error.message; // Assuming error response contains a message field
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }


  createColeccion(coleccion: Coleccion) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Ensure we're sending JSON
      'Accept': 'application/json',         // Ensure we expect JSON back
    });
    return this.http.post<Coleccion>(this.apiUrl, coleccion, { headers });
  }

// @ts-ignore
  getColecciones(usuario:Usuario): Observable<Coleccion[]>{

    if (usuario){
      // @ts-ignore
      return this.http.get<Coleccion[]>(`${this.apiUrl}/usuario?id=${usuario.id}`);    }
  }

}
