import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Planta} from "../interfaces/planta-interface";
import {environment} from "../../enviroments/enviroment";

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

}


