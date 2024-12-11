import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../interfaces/usuario";
import {catchError, map, Observable, switchMap, throwError} from "rxjs";
import {Coleccion} from "../interfaces/coleccion";
import {UsuarioService} from "./usuario.service";


@Injectable({
  providedIn: 'root'
})
export class ColeccionService {

  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/colecciones';

  public coleccion: Coleccion | undefined = undefined;
  public colecciones: Coleccion[] | undefined = undefined;


  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object,
              private usuarioService: UsuarioService) {}




  addPlantaToColeccion(coleccionId: number, plantaId: number): Observable<Coleccion> {
    return this.http.put<Coleccion>(`${this.apiUrl}/${coleccionId}/plantas/${plantaId}`, {})
      .pipe(
        catchError((error) => {
          let errorMessage = 'An error occurred while adding the planta to the coleccion.';
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }


  createColeccion(nombre: string, usuarioId: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Ensure we expect JSON back
    });

    return this.http.get<Coleccion>(`${this.apiUrl}/coleccion/${nombre}/${usuarioId}`, { headers });
  }



// @ts-ignore
  getColecciones(usuario:Usuario): Observable<Coleccion[]>{

    if (usuario){
      // @ts-ignore
      return this.http.get<Coleccion[]>(`${this.apiUrl}/usuario?id=${usuario.id}`);    }
  }

  deleteColeccion(id: number | undefined): Observable<void> {
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Expect JSON response
    });

    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  removePlantaFromColeccion(coleccionId: number | undefined, plantaId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });

    return this.http.delete<void>(`${this.apiUrl}/${coleccionId}/plantas/${plantaId}`, { headers })
      .pipe(
        catchError((error) => {
          let errorMessage = 'An error occurred while removing the planta from the coleccion.';

          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
