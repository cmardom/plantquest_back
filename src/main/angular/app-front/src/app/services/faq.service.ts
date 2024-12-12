import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../interfaces/blog";
import {faq} from "../interfaces/faq";

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/faq';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  getFAQs(): Observable<faq[]>{
    return this.http.get<faq[]>(this.apiUrl);

  }

}

