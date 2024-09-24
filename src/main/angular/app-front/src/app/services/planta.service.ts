import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Planta} from "../interfaces/planta-interface";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = 'http://localhost:8080/v1/api/plantas';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl)
  }

}


