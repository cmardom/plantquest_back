import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Planta} from "../interfaces/planta-interface";
import {environment} from "../../enviroments/enviroment";
import {Blog} from "../interfaces/blog";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/plantas';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl)
  }

  getOnePlanta(id: number): Observable<Planta>{
    return this.http.get<Planta>(this.apiUrl + '/' + id);
  }

  getPlantasFromColeccionID(id: number){
    return this.http.get<Planta[]>(this.apiUrl + '/coleccion' + id)
  }


  savePlanta(planta:Planta): Observable<Planta> {
    if (planta.id && planta.id > 0) {
      return this.http.put<Planta>(`${this.apiUrl}/${planta.id}`, planta);
    } else {
      return this.http.post<Planta>(this.apiUrl, planta);
    }
  }

  deletePlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}


